import * as S from "../../../shared/style/add/add.style";

export default function QuizSettings() {
  return (
    <S.Card>
      <S.SideTitle>AI퀴즈 생성</S.SideTitle>
      <S.SettingItem>
        <label>설정</label>
        <select>
          <option>몇일동안 퀴즈를 진행할지 선택해주세요</option>
          <option>3일</option><option>5일</option><option>7일</option>
        </select>
      </S.SettingItem>
      <S.BlueInfo>퀴즈는 매일 오전 9시 gmail로 전송됩니다</S.BlueInfo>
    </S.Card>
  );
}