import "../../css/Maincomponents/Add.css";

function Add() {
  return (
    <div className="AC">
      <div className="add-container">
        {/* 왼쪽 입력 영역 */}
        <div className="main-section">
          <div className="card">
            <div className="input-box">
              <label>노트 제목</label>
              <input type="text" placeholder="노트 제목을 입력하세요" />
            </div>

            <div className="input-box">
              <label>노트 내용</label>
              <textarea 
                placeholder="학습 내용을 자세히 작성해주세요. AI가 이 내용을 바탕으로 퀴즈를 생성합니다."
              ></textarea>
            </div>

            <div className="input-box">
              <label>한줄요약</label>
              <input type="text" placeholder="노트 내용을 한줄요약해주세요" />
            </div>
          </div>
        </div>

        {/* 오른쪽 설정 영역 */}
        <div className="side-section">
          {/* AI 퀴즈 설정 */}
          <div className="card side-card">
            <h3 className="side-title">AI퀴즈 생성</h3>
            <div className="setting-item">
              <label>설정</label>
              <select>
                <option>몇일동안 퀴즈를 진행할지 선택해주세요</option>
                <option>3일</option>
                <option>5일</option>
                <option>7일</option>
              </select>
            </div>
            <p className="blue-info">퀴즈는 매일 오전 9시 gmail로 전송됩니다</p>
          </div>

          {/* 새 노트 생성 */}
          <div className="card side-card">
            <h3 className="side-title">새 노트 작성</h3>
            <div className="setting-item">
              <label>설정</label>
              <select>
                <option>공개</option>
                <option>비공개</option>
              </select>
            </div>
            <button className="create-btn">새 노트 생성하기</button>
          </div>

          {/* 작성팁 */}
          <div className="card side-card tip-box">
            <h3 className="side-title tip-title">💡 작성팁</h3>
            <ul className="tip-list">
              <li><span>✓</span> 핵심 개념을 명확하게 정리하세요</li>
              <li><span>✓</span> 예시와 설명을 함께 작성하세요</li>
              <li><span>✓</span> 구조화된 형태로 정리하세요</li>
              <li><span>✓</span> 중요한 키워드를 포함하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;