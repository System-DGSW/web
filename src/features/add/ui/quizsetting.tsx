import * as S from "../../../shared/style/add/add.style";

export default function QuizSetting({ data, onChange }: any) {
  return (
    <S.Card>
      <S.SideTitle>AI퀴즈 생성</S.SideTitle>
      <S.SettingItem>
        <label>설정</label>
        <select 
          value={data.subscription} 
          onChange={(e) => onChange("subscription", e.target.value)}
        >
          <option value="">몇일동안 퀴즈를 진행할지 선택해주세요</option>
          <option value="DAILY">매일</option>
          <option value="ONE_TIME">1루 (하루)</option>
          <option value="NO">안함</option>
        </select>
      </S.SettingItem>
      <S.BlueInfo>퀴즈는 매일 오전 9시 gmail로 전송됩니다</S.BlueInfo>
    </S.Card>
  );
}