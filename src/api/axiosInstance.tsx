import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

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
const processQueue = (error: Error | null): void => {
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
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }
    // 401 에러이고, 아직 재시도하지 않은 경우 로직 시작
    if (!originalRequest._retry) {
      const currentPath = window.location.pathname;
      const publicPaths = ["/login", "/Login", "/signup", "/"];
      if (publicPaths.includes(currentPath)) {
        return Promise.reject(error);
      }
      const REFRESH_URL = "/auth/refresh"; 

      if (originalRequest.url === REFRESH_URL) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      // 이미 리프레시 중이라면 큐에서 대기
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
        await axiosInstance.post(REFRESH_URL);

        processQueue(null);
        return axiosInstance(originalRequest); 
      } catch (refreshError) {
        processQueue(refreshError as Error);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;