import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { titles } from "../../constants/loginmian/titles";
import { Sidebar } from "../../features/loginmain/ui/Sidebar"; // ✅ 분리한 사이드바 임포트
import type { ActiveType } from "../../features/loginmain/ui/type";
import R from "../../shared/img/R.svg?react";
import * as S from "../../shared/style/loginmain/loginmain.style";

function Loginmain() {
  const [active, setActive] = useState<ActiveType>("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("home")) setActive("home");
    else if (path.includes("note")) setActive("note");
    else if (path.includes("add")) setActive("add");
    else if (path.includes("profile")) setActive("profile");
    else setActive("");
  }, [location.pathname]);

  return (
    <S.MainContainer>
      {/* ✅ 이제 에러 없이 active 값을 넘겨줄 수 있습니다 */}
      <Sidebar active={active} />

      <S.ContentArea>
        <S.TopHeader>
          <h3>{active ? (titles as any)[active] : "환영합니다"}</h3>
          <R></R>
          <div className="username">username</div>
        </S.TopHeader>

        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.ContentArea>
    </S.MainContainer>
  );
}

export default Loginmain;
