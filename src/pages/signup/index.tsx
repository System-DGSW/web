import { useNavigate } from "react-router-dom";
import icon from "../../shared/img/icon.png";
import { SignupForm } from "../../features/auth";
import * as S from "./styled";

export default function Signup() {
  const navigate = useNavigate();
  // toast 상태는 하위 SignupForm에서 관리하거나 Context로 관리한다고 가정
  // 만약 여기서 관리한다면 useSignup 훅 등을 연결하세요.

  return (
    <S.PageContainer>
      <S.Header>
        <S.LogoBox onClick={() => navigate("/")}>
          <img src={icon} alt="logo" />
        </S.LogoBox>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Rezension</h1>
      </S.Header>

      <S.MainContent>
        <S.Wrapper>
          <S.TitleSection>
            <h2>회원가입</h2>
            <p>
              이미 계정이 있으신가요?{" "}
              <button
                onClick={() => navigate("/login")}
                style={{
                  color: "#2563eb",
                  background: "none",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                로그인하기
              </button>
            </p>
          </S.TitleSection>
          {/* SignupForm 내부의 스타일도 styled-components로 바꿀 수 있습니다 */}
          <SignupForm />
        </S.Wrapper>
      </S.MainContent>
    </S.PageContainer>
  );
}
