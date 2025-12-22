import icon from "../../../public/아이콘.png";
import "../../css/loginmain/loginmain.css";
import { Sidebar } from "../../style/Side";
function Loginmain() {
  return (
    <div className="bccon">
      <Sidebar>
        <div className="tcon">
          <img src={icon}></img>Rezension
        </div>
        <div className="user">
          <p>username</p>
        </div>
        <div className="select">
          <button className="bt home">홈</button>
          <button className="bt note">내 노트</button>
          <button className="bt add">노트작성</button>
          <button className="bt profie">프로필</button>
          <button className="bt logout">로그아웃</button>
        </div>
      </Sidebar>
      <div className="rcon"></div>
    </div>
  );
}
export default Loginmain;
