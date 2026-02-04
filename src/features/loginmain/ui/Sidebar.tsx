import { useNavigate } from "react-router-dom";
import * as S from "../../../shared/style/loginmain/loginmain.style";
import { RHome, Rlogout, Rnote, RPnote, Rprofile } from "../../../shared/img/FTS";

interface SidebarProps {
  active: string;
}

export const Sidebar = ({ active }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <S.SidebarWrapper>
      <S.LogoContainer onClick={() => navigate("/home")}>
        Rezension
      </S.LogoContainer>

      <S.MenuList>
        <S.NavButton $active={active === "home"} onClick={() => navigate("/main/home")}>
          <S.IconBox>
            <RHome className="IC" />
          </S.IconBox>
          홈
        </S.NavButton>

        <S.NavButton $active={active === "note"} onClick={() => navigate("/main/note")}>
          <S.IconBox>
            <Rnote className="IC" />
          </S.IconBox>
          내 노트
        </S.NavButton>

        <S.NavButton $active={active === "add"} onClick={() => navigate("/main/add")}>
          <S.IconBox>
            <RPnote className="IC" />
          </S.IconBox>
          노트작성
        </S.NavButton>

        <S.NavButton $active={active === "profile"} onClick={() => navigate("/main/profile")}>
          <S.IconBox>
            <Rprofile className="ICE" />
          </S.IconBox>
          프로필
        </S.NavButton>

        <S.NavButton $isLogout onClick={() => navigate("/")}>
          <S.IconBox>
            <Rlogout className="IC lo" />
          </S.IconBox>
          로그아웃
        </S.NavButton>
      </S.MenuList>
    </S.SidebarWrapper>
  );
};