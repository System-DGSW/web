import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../css/loginmain/loginmain.css";

// 아이콘 임포트
import RH from "../../img/Icon/RH.svg";
import RL from "../../img/Icon/RL.svg";
import RN from "../../img/Icon/RN.svg";
import RP from "../../img/Icon/RP.svg";
import RPR from "../../img/Icon/RPR.svg";
import { Sidebar } from "../../style/Side";

// 1. 사용할 메뉴 아이디들을 타입으로 정의
type ActiveType = "home" | "note" | "add" | "profile" | "";
interface TitleMap {
  home: string;
  note: string;
  add: string;
  profile: string;
}
function Loginmain() {
  // 2. 상태에 타입 적용
  const [active, setActive] = useState<ActiveType>("");
  const location = useLocation();
  const navigate = useNavigate();

  // 3. 타이틀 매핑 객체에 Record 타입을 사용하여 타입 안전성 확보
  const titles: TitleMap = {
    home: "홈",
    note: "내 노트",
    add: "노트 작성",
    profile: "프로필",
  };

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("home")) setActive("home");
    else if (path.includes("note")) setActive("note");
    else if (path.includes("add")) setActive("add");
    else if (path.includes("profile")) setActive("profile");
    else setActive(""); // 일치하는 경로가 없을 때 초기화
  }, [location.pathname]);

  return (
    <div className="bccon">
      <Sidebar>
        <div
          className="tcon"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          <img src="/아이콘.png" alt="icon" />
          Rezension
        </div>

        <div className="select">
          <button
            className={`bt ${active === "home" ? "active" : ""}`}
            onClick={() => navigate("home")}
          >
            <div className="Icon">
              <img src={RH} className="IC" alt="home" />
            </div>
            홈
          </button>

          <button
            className={`bt ${active === "note" ? "active" : ""}`}
            onClick={() => navigate("note")}
          >
            <div className="Icon">
              <img src={RN} className="IC" alt="note" />
            </div>
            내 노트
          </button>

          <button
            className={`bt ${active === "add" ? "active" : ""}`}
            onClick={() => navigate("add")}
          >
            <div className="Icon">
              <img src={RP} className="IC" alt="add" />
            </div>
            노트작성
          </button>

          <button
            className={`bt ${active === "profile" ? "active" : ""} profile`}
            onClick={() => navigate("profile")}
          >
            <div className="Icon">
              <img src={RPR} className="ICE" alt="profile" />
            </div>
            프로필
          </button>

          <button className="logout">
            <div className="Icon">
              <img src={RL} className="IC lo" alt="logout" />
            </div>
            로그아웃
          </button>
        </div>
      </Sidebar>

      <div className="rcon">
        <header className="Top">
          <h3>{active && titles[active] ? titles[active] : "환영합니다"}</h3>
          <div className="U">username</div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default Loginmain;
