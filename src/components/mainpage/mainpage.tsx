import { useNavigate } from "react-router-dom";
import "../../css/mainpagecss/mainpage.css";
import * as F from "../../style/Footer";
import * as S from "../../style/Topbar";

// ✅ public 폴더 이미지는 import 하지 않습니다. (삭제됨)

function Mainpages() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Tmain">
        <S.Topbar>
          <div className="name">
            {/* ✅ /public/아이콘.png -> /아이콘.png 로 수정 */}
            <img src="/아이콘.png" alt="icon" />
            <p className="projectname">Rezension</p>
          </div>
          <div className="login">
            <button className="loginbt" onClick={() => navigate('/login')}>로그인</button>
            <button className="sinupbt" onClick={() => navigate('/signup')}>회원가입</button>
          </div>
        </S.Topbar>

        <div className="Fcon">
          <div className="Titlecon">
            <div className="title">
              <div className="tbox">
                <p className="maintitle">스마트한 학습을 위한</p>
                <p className="subtitle">Rezension</p>
                <p className="minititle">당신의 학습을 기록하고, 꾸준히 복습하세요!</p>
                <p className="minititle">작은 노력도 모이면 큰 성장이 됩니다.</p>
                <div className="btcon">
                  <button className="gostart" onClick={() => navigate('/login')}>지금시작하기</button>
                  <button className="loginbts" onClick={() => navigate('/signup')}>회원가입</button>
                </div>
              </div>
            </div>
            <div className="imgcon">
              {/* ✅ import 변수 대신 직접 경로 입력 */}
              <img src="/img/공부.png" className="study" alt="study" />
            </div>
          </div>

          <div className="about">
            <div className="hocon">
              <h2 className="how">어떻게 작동하나요?</h2>
              <p className="howsub">간단한 3단계로 스마트한 학습을 시작하세요</p>
            </div>
            <div className="demain">
              <div className="decon1">
                <div>
                  <img src="/img/원1.png" alt="step1" />
                </div>
                <p className="detitle">노트작성</p>
                <p className="desub">학습 내용을 직관적인 에디터로 정리하고 작성하세요</p>
              </div>
              <div className="decon2">
                <div>
                  <img src="/img/원2.png" alt="step2" />
                </div>
                <p className="detitle">AI 퀴즈 생성</p>
                <p className="desub">AI가 작성한 노트를 분석하여 맞춤형 퀴즈를 자동 생성합니다</p>
              </div>
              <div className="decon3">
                <div>
                  <img src="/img/원3.png" alt="step3" />
                </div>
                <p className="detitle">학습완성</p>
                <p className="desub">퀴즈를 풀며 효과를 확인하고 실력 향상시키세요</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Bmain">
        <div className="Q">
          <div className="titlecon">
            <p className="qtitle">자주 묻는 질문</p>
            <p className="qsubtitle">Rezension에 대해 궁금한 점들을 확인보세요</p>
          </div>
          <div className="Qcon">
            <div className="qcon">
              <p className="atitle">Rezension는 무료로 사용할 수 있나요?</p>
              <p className="a">네, 기본 기능은 무료로 제공합니다. 더 많은 고급기능을 원하시면 프리미엄 플랜이 있습니다.</p>
            </div>
            <div className="qcon">
              <p className="atitle">AI 퀴즈는 어떻게 생성되나요?</p>
              <p className="a">작성하는 노트의 내용을 AI가 분석하고, 이를 바탕으로 다양한 유형의 퀴즈를 자동생성합니다.</p>
            </div>
            <div className="qcon">
              <p className="atitle">데이터는 안전하게 보관되나요?</p>
              <p className="a">모든 데이터는 암호화되어 안전하게 저장되며, 개인정보보호 정책에 따라 엄격하게 관리됩니다.</p>
            </div>
          </div>
        </div>
        <F.Footer>
          <div className="Ftitle">Rezension</div>
          <div className="any">
            <p className="l">대구광역시 달성군 구지면 창리로11길 93</p>
            <p className="l">93, Changri-ro 11-gil, Guji-myeon, Dalseong-gun, Daegu, Republic of Korea</p>
            <p className="d">ⓒ Rezension | 이메일 : Rezension@gmail.com | 전화번호 : 010-1234-5678</p>
            <p className="d">이용약관 문의하기 개인정보처리방침 웹접근성정책</p>
          </div>
        </F.Footer>
      </div>
    </div>
  );//응애
}

export default Mainpages;