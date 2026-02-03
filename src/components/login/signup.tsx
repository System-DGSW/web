import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 아이콘 추가
import icon from "../../../public/아이콘.png";
import "../../css/login/signup.css";
import axiosInstance from "../../api/axiosInstance";

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

  // 🔹 비밀번호 보기 상태 (각각 독립적으로 제어)
  const [showPw, setShowPw] = useState<boolean>(false);
  const [showConfirmPw, setShowConfirmPw] = useState<boolean>(false);

  const showToast = (message: string, type: "success" | "error" = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignup = async () => {
    if (!form.username || !form.password || !form.confirmPassword || !form.email) {
      showToast("모든 필드를 입력해주세요.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showToast("비밀번호가 일치하지 않습니다.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const signupData = {
        username: form.username,
        password: form.password,
        email: form.email,
      };

      await axiosInstance.post("/auth/signup", signupData);
      showToast("회원가입 성공! 로그인 페이지로 이동합니다.", "success");
      setForm({ username: "", password: "", confirmPassword: "", email: "" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "회원가입 실패. 다시 시도해주세요.";
      showToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSignup();
    }
  };

  return (
    <div className="signup-page-container">
      {toast.message && (
        <div className={`signup-toast signup-toast-${toast.type}`}>{toast.message}</div>
      )}

      <header className="signup-header">
        <div className="signup-logo-box" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={icon} alt="logo" />
        </div>
        <h1 className="signup-header-title">Rezension</h1>
      </header>

      <main className="signup-main-content">
        <div className="signup-wrapper">
          <div className="signup-title-section">
            <h2 className="signup-main-title">회원가입</h2>
            <p className="signup-text">
              이미 계정이 있으신가요?{" "}
              <button className="signup-link-btn" onClick={() => navigate("/login")}>
                로그인하기
              </button>
            </p>
          </div>

          <div className="signup-card-box">
            {/* 아이디 */}
            <div className="signup-form-group">
              <label htmlFor="username">아이디</label>
              <input
                id="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="아이디를 입력하세요"
                className="signup-form-input"
                autoComplete="username"
                disabled={isLoading}
              />
            </div>

            {/* 비밀번호 */}
            <div className="signup-form-group">
              <label htmlFor="password">비밀번호</label>
              <div className="signup-pw-wrapper">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="비밀번호를 입력하세요"
                  className="signup-form-input"
                  autoComplete="new-password"
                  disabled={isLoading}
                />
                <button 
                  type="button" 
                  className="signup-pw-toggle" 
                  onClick={() => setShowPw(!showPw)}
                >
                  {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div className="signup-form-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <div className="signup-pw-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPw ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="비밀번호를 다시 입력하세요"
                  className="signup-form-input"
                  autoComplete="new-password"
                  disabled={isLoading}
                />
                <button 
                  type="button" 
                  className="signup-pw-toggle" 
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                >
                  {showConfirmPw ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* 이메일 */}
            <div className="signup-form-group">
              <label htmlFor="email">이메일 주소</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="이메일을 입력하세요"
                className="signup-form-input"
                autoComplete="email"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handleSignup}
              className={`signup-submit-button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "처리 중..." : "회원가입"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}