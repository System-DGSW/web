import axios from "axios";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../../public/아이콘.png";
import "../../css/login/login.css";

interface FormData {
  username: string;
  password: string;
}

interface Toast {
  message: string;
  type: "success" | "error" | "";
}

const api = axios.create({
  baseURL: import.meta.env.VITE_Sign_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    username: "",
    password: "",
  });

  const [toast, setToast] = useState<Toast>({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /** 🔹 인풋 변경 핸들러 */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  /** 🔹 토스트 메시지 표시 */
  const showToast = (message: string, type: "success" | "error" = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  /** 🔑 로그인 버튼 클릭 (이름 변경: handleSignup → handleLogin) */
  const handleLogin = async () => {
    if (!form.username || !form.password) {
      showToast("아이디와 비밀번호를 모두 입력해주세요.", "error"); // 메시지 구체화
      return;
    }
    setIsLoading(true);
    try {
      const loginData = {
        username: form.username,
        password: form.password,
      };
      await api.post("/auth/signin", loginData);
      setForm({ username: "", password: "" });
      showToast("로그인 성공! 환영합니다.", "success");
      setTimeout(() => {
        navigate("/main/home");
      }, 1500);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message;
      showToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="container">
      {toast.message && (
        <div
          className={`toast ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* ✅ 헤더 */}
      <header className="header">
        <img src={icon} alt="logo" className="logo-img" />
        <h1 className="header-title">Rezension</h1>
      </header>

      {/* ✅ 메인 컨텐츠 */}
      <main className="main-content">
        <div className="login-wrapper">
          <div className="title-section">
            <h2 className="main-title">로그인</h2>
            <p className="signup-text">
              계정이 없으신가요? {/* ✨ 개선: 텍스트 변경 */}
              <button
                className="signup-link"
                // ✨ 개선: 회원가입 페이지로 이동하도록 경로 수정
                onClick={() => navigate("/signup")}
              >
                회원가입하기
              </button>
            </p>
          </div>

          <div className="login-card1">
            <div className="form-group one">
              <label htmlFor="username" className="form-label">
                아이디
              </label>
              <input
                id="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="아이디를 입력하세요"
                className="form-input"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="비밀번호를 입력하세요"
                className="form-input"
                disabled={isLoading}
              />
            </div>
            {/* ✨ 개선: 로그인 함수 연결 */}
            <button
              onClick={handleLogin}
              className="login-button1"
              disabled={isLoading || !form.username || !form.password} // ✨ 개선: 입력값 없으면 버튼 비활성화
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>

            {/* ✅ 비밀번호 찾기 (UX 개선을 위한 추가 요소) */}
            <div className="forgot-password">
              <button
                className="forgot-link"
                onClick={() => navigate("/forgot-password")}
              >
                비밀번호를 잊으셨나요?
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
