import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

// 대기 중인 요청을 위한 인터페이스
interface FailedRequest {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_Sign_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

// 큐 프로세싱 함수
const processQueue = (
  error: Error | null,
  _token: string | null = null,
): void => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.withCredentials = true;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // 401 에러이고, 아직 재시도하지 않은 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      const currentPath = window.location.pathname;
      const publicPaths = ["/Login", "/signup", "/"];

      if (publicPaths.includes(currentPath)) {
        return Promise.reject(error);
      }

      // refresh 요청 자체가 401이면 무한 루프 방지를 위해 로그인 이동
      if (originalRequest.url === "/users/refresh") {
        window.location.href = "/Login";
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // 서버에서 쿠키를 통해 Access Token을 재발급한다고 가정
        await axiosInstance.post("/users/refresh");

        processQueue(null);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as Error);
        window.location.href = "/Login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
