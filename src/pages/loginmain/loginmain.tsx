import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../css/loginmain/loginmain.css";

// 아이콘 임포트 (타입 정의에 따라 이미 컴포넌트로 인식됨)
import RHome from "../../shared/img/FTS/Rhome.svg";
import Rlogout from "../../shared/img/FTS/Rlogout.svg";
import Rnote from "../../shared/img/FTS/Rnote.svg";
import RPnote from "../../shared/img/FTS/RPnote.svg";
import Rprofile from "../../shared/img/FTS/Rprofile.svg";
import { Sidebar } from "../../shared/style/Side";

// 사용할 메뉴 아이디들을 타입으로 정의
type ActiveType = "home" | "note" | "add" | "profile" | "";

interface TitleMap {
  home: string;
  note: string;
  add: string;
  profile: string;
}

function Loginmain() {
  const [active, setActive] = useState<ActiveType>("");
  const location = useLocation();
  const navigate = useNavigate();

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
    else setActive("");
  }, [location.pathname]);

  return (
    <div className="bccon">
      <Sidebar>
        <div
          className="tcon"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          {/* 일반 PNG 이미지는 그대로 img 태그 사용 */}
          <img src="/아이콘.png" alt="icon" />
          Rezension
        </div>

        <div className="select">
          <button
            className={`bt ${active === "home" ? "active" : ""}`}
            onClick={() => navigate("home")}
          >
            <div className="Icon">
              <RHome className="IC" />
            </div>
            홈
          </button>

          <button
            className={`bt ${active === "note" ? "active" : ""}`}
            onClick={() => navigate("note")}
          >
            <div className="Icon">
              <Rnote className="IC" />
            </div>
            내 노트
          </button>

          <button
            className={`bt ${active === "add" ? "active" : ""}`}
            onClick={() => navigate("add")}
          >
            <div className="Icon">
              <RPnote className="IC" />
            </div>
            노트작성
          </button>

          <button
            className={`bt ${active === "profile" ? "active" : ""} profile`}
            onClick={() => navigate("profile")}
          >
            <div className="Icon">
              <Rprofile className="ICE" />
            </div>
            프로필
          </button>

          <button className="logout">
            <div className="Icon">
              <Rlogout className="IC lo" />
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
