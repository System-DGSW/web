import React, { useState } from "react";
import icon from "../../../public/아이콘.png";
import "../../css/login/login.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`로그인: ${username}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="logo-box">
          <img src={icon}></img>
        </div>
        <h1 className="header-title">Rezension</h1>
      </div>
      <div className="main-content">
        <div className="login-wrapper">
          {/* Title */}
          <div className="title-section">
            <h2 className="main-title">로그인</h2>
            <p className="signup-text">
              또는 <button className="signup-link">새 계정 만들기</button>
            </p>
          </div>
          <div className="login-card">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                아이디
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="아이디를 입력하세요"
                className="form-input"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="비밀번호를 입력하세요"
                className="form-input"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="forgot-password">
              <button className="forgot-link">비밀번호를 잊으셨나요?</button>
            </div>

            {/* Login Button */}
            <button onClick={handleLogin} className="login-button">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
