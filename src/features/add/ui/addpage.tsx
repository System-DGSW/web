import * as S from "../../../shared/style/add/add.style"
function Add() {
  return (
    <S.AC>
      <S.AddContainer>
        {/* 왼쪽 입력 영역 */}
        <S.MainSection>
          <S.Card>
            <S.InputBox>
              <label>노트 제목</label>
              <input type="text" placeholder="노트 제목을 입력하세요" />
            </S.InputBox>

            <S.InputBox>
              <label>노트 내용</label>
              <textarea 
                placeholder="학습 내용을 자세히 작성해주세요. AI가 이 내용을 바탕으로 퀴즈를 생성합니다."
              ></textarea>
            </S.InputBox>

            <S.InputBox>
              <label>한줄요약</label>
              <input type="text" placeholder="노트 내용을 한줄요약해주세요" />
            </S.InputBox>
          </S.Card>
        </S.MainSection>

        {/* 오른쪽 설정 영역 */}
        <S.SideSection>
          {/* AI 퀴즈 설정 */}
          <S.Card>
            <S.SideTitle>AI퀴즈 생성</S.SideTitle>
            <S.SettingItem>
              <label>설정</label>
              <select>
                <option>몇일동안 퀴즈를 진행할지 선택해주세요</option>
                <option>3일</option>
                <option>5일</option>
                <option>7일</option>
              </select>
            </S.SettingItem>
            <S.BlueInfo>퀴즈는 매일 오전 9시 gmail로 전송됩니다</S.BlueInfo>
          </S.Card>

          {/* 새 노트 생성 */}
          <S.Card>
            <S.SideTitle>새 노트 작성</S.SideTitle>
            <S.SettingItem>
              <label>설정</label>
              <select>
                <option>공개</option>
                <option>비공개</option>
              </select>
            </S.SettingItem>
            <S.CreateBtn>새 노트 생성하기</S.CreateBtn>
          </S.Card>

          {/* 작성팁 */}
          <S.TipCard>
            <S.SideTitle>💡 작성팁</S.SideTitle>
            <S.TipList>
              <li><span>✓</span> 핵심 개념을 명확하게 정리하세요</li>
              <li><span>✓</span> 예시와 설명을 함께 작성하세요</li>
              <li><span>✓</span> 구조화된 형태로 정리하세요</li>
              <li><span>✓</span> 중요한 키워드를 포함하세요</li>
            </S.TipList>
          </S.TipCard>
        </S.SideSection>
      </S.AddContainer>
    </S.AC>
  );
}

export default Add;