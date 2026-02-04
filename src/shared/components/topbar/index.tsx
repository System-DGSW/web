import * as S from "../../style/main/main.style";
import { useNavigate } from "react-router-dom";
import R from "../../../shared/img/R.svg?react"
export default function Header() {
  const navigate = useNavigate();
  return (
    <S.Topbar>
      <S.LogoGroup onClick={() => navigate("/")}>
        <R />
        <span>Rezension</span>
      </S.LogoGroup>
      <S.ButtonGroup>
        <S.StyledButton onClick={() => navigate("/login")}>로그인</S.StyledButton>
        <S.StyledButton $variant="primary" onClick={() => navigate("/signup")}>회원가입</S.StyledButton>
      </S.ButtonGroup>
    </S.Topbar>
  );
}