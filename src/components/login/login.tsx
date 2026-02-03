import axios from "axios";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 아이콘 추가
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
  const [form, setForm] = useState<FormData>({ username: "", password: "" });
  const [toast, setToast] = useState<Toast>({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPw, setShowPw] = useState<boolean>(false); // 👈 비밀번호 보기 상태

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const showToast = (message: string, type: "success" | "error" = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      showToast("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    setIsLoading(true);
    try {
      await api.post("/auth/signin", form);
      showToast("로그인 성공! 환영합니다.", "success");
      setTimeout(() => navigate("/main/home"), 1500);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "로그인에 실패했습니다.";
      showToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page-container">
      {toast.message && (
        <div className={`login-toast login-toast-${toast.type}`}>{toast.message}</div>
      )}

      <header className="login-header">
        <div className="login-logo-box" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={icon} alt="logo" />
        </div>
        <h1 className="login-header-title">Rezension</h1>
      </header>

      <main className="login-main-content">
        <div className="login-wrapper">
          <div className="login-title-section">
            <h2 className="login-main-title">로그인</h2>
            <p className="login-signup-text">
              계정이 없으신가요?
              <button className="login-signup-link" onClick={() => navigate("/signup")}>
                회원가입하기
              </button>
            </p>
          </div>

          <div className="login-card-box">
            <div className="login-form-group">
              <label htmlFor="username">아이디</label>
              <input
                id="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="아이디를 입력하세요"
                className="login-form-input"
                disabled={isLoading}
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password">비밀번호</label>
              <div className="login-pw-wrapper">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="비밀번호를 입력하세요"
                  className="login-form-input"
                  disabled={isLoading}
                />
                <button 
                  type="button" 
                  className="login-pw-toggle" 
                  onClick={() => setShowPw(!showPw)}
                >
                  {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="login-submit-button"
              disabled={isLoading || !form.username || !form.password}
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>

            <div className="login-forgot-password">
              <button className="login-forgot-link" onClick={() => navigate("/forgot-password")}>
                비밀번호를 잊으셨나요?
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}