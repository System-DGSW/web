import "../../css/mainpagecss/mainpage.css";
import * as S from "../../style/Topbar";
import study from "../img/공부.png";
import c1 from "../img/원1.png";
import c2 from "../img/원2.png";
import c3 from "../img/원3.png";
function Mainpages() {
  return (
    <div>
      <div className="Tmain">
        <S.Topbar>
          <div className="name">
            <img src="/public/아이콘.png"></img>
            <p className="projectname">Rezension</p>
          </div>
          <div className="login">
            <button className="loginbt">로그인</button>
            <button className="sinupbt">회원가입</button>
          </div>
        </S.Topbar>
        <div className="Fcon">
          <div className="Titlecon">
            <div className="title">
              <div className="tbox">
                <p className="maintitle">스마트한 학습을 위한</p>
                <p className="subtitle">Rezension</p>
                <p className="minititle">
                  당신의 학습을 기록하고, 꾸준히 복습하세요!
                </p>
                <p className="minititle">
                  작은 노력도 모이면 큰 성장이 됩니다.
                </p>
                <div className="btcon">
                  <button className="gostart">지금시작하기</button>
                  <button className="loginbts">로그인</button>
                </div>
              </div>
            </div>
            <div className="imgcon">
              <img src={study} className="study"></img>
            </div>
          </div>
          <div className="about">
            <div className="hocon">
              <h2 className="how">어떻게 작동하나요?</h2>
              <p className="howsub">
                간단한 3단계로 스마트한 학습을 시작하세요
              </p>
            </div>
            <div className="demain">
              <div className="decon1">
                <div>
                  <img src={c1}></img>
                </div>
                <p className="detitle">노트작성</p>
                <p className="desub">
                  학습 내용을 직관적인 에디터로 정리하고 작성하세요
                </p>
              </div>
              <div className="decon2">
                <div>
                  <img src={c2}></img>
                </div>
                <p className="detitle">AI 퀴즈 생성</p>
                <p className="desub">
                  AI가 작성한 노트를 분석하여 맞춤형 퀴즈를 자동 생성합니다
                </p>
              </div>
              <div className="decon3">
                <div>
                  <img src={c3}></img>
                </div>
                <p className="detitle">학습완성</p>
                <p className="desub">
                  퀴즈를 풀며 효과를 확인하고 실력 향상시키세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Bmain"></div>
    </div>
  );
}
export default Mainpages;
