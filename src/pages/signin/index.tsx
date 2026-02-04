import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../features/auth/ui/signinForm";

import * as S from "./styled"; // Signup에서 쓰는 것과 동일한 스타일 파일 활용

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      {/* 회원가입 페이지와 동일한 헤더 구조 */}
      <S.Header>
        <S.LogoBox onClick={() => navigate("/")}>
          <img src="../../shared/img/R.svg" alt="logo" />
        </S.LogoBox>
        <h1>Rezension</h1>
      </S.Header>

      <S.MainContent>
        <S.Wrapper>
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h2>로그인</h2>
            <p>
              계정이 없으신가요?{" "}
              {/* S.ActionButton 혹은 기존 버튼 스타일 사용 */}
              <button
                onClick={() => navigate("/signup")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2563eb",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                회원가입하기
              </button>
            </p>
          </div>

          {/* 실제 로직이 담긴 폼 컴포넌트 */}
          <LoginForm />
        </S.Wrapper>
      </S.MainContent>
    </S.PageContainer>
  );
};

export default LoginPage;
