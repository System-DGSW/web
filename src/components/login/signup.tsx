import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../../public/아이콘.png";
import "../../css/login/signup.css";
import axios from "axios";
interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
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
export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [toast, setToast] = useState<Toast>({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /** 🔹 인풋 변경 핸들러 */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  /** 🔹 토스트 메시지 */
  const showToast = (message: string, type: "success" | "error" = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  /** 🔹 회원가입 버튼 클릭 */
  const handleSignup = async () => {
    if (
      !form.username ||
      !form.password ||
      !form.confirmPassword ||
      !form.email
    ) {
      showToast("모든 필드를 입력해주세요.", "error");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showToast("비밀번호가 일치하지 않습니다.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("올바른 이메일 형식을 입력해주세요.", "error");
      return;
    }

    setIsLoading(true);
    try {
      const signupData = {
        username: form.username,
        password: form.password,
        email: form.email,
      };
      await api.post("/auth/signup", signupData);
      showToast("회원가입 성공! 로그인 페이지로 이동합니다.", "success");
      setForm({ username: "", password: "", confirmPassword: "", email: "" });
      setTimeout(() => navigate('/login'), 1500); 

    } catch (err: any) {
        const errorMessage = err.response?.data?.message || "회원가입 실패. 다시 시도해주세요.";
        showToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };

  /** 🔹 엔터 키 입력 시 */
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSignup();
  };

  // ... (나머지 JSX 코드는 동일합니다.)
  return (
    <div className="container">
      {/* ✅ 토스트 메시지 */}
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
        <div className="logo-box">
          <img src={icon} alt="logo" />
        </div>
        <h1 className="header-title">Rezension</h1>
      </header>

      {/* ✅ 메인 컨텐츠 */}
      <main className="main-content">
        <div className="login-wrapper">
          <div className="title-section">
            <h2 className="main-title">회원가입</h2>
            <p className="signup-text">
              또는{" "}
              <button className="signup-link" onClick={() => navigate('/login')}>
                로그인하기
              </button>
            </p>
          </div>

          <div className="login-card">
            <div className="form-group">
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

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                비밀번호 확인
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="비밀번호를 다시 입력하세요"
                className="form-input"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                이메일 주소
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="이메일을 입력하세요"
                className="form-input"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handleSignup}
              className="login-button2"
              disabled={isLoading}
            >
              {isLoading ? "가입 중..." : "회원가입"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}