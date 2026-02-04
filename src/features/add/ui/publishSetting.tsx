import * as S from '../../../shared/style/add/add.style';
export default function PublishSettings({ data, onChange, onSubmit }: { data: any, onChange: any, onSubmit: any }) {
  return (
    <S.Card>
      <S.SettingItem>
        <label>공개 설정</label>
        <select 
          value={data.visibility} 
          onChange={(e) => onChange("visibility", e.target.value)}
        >
          <option value="PUBLIC">공개</option>
          <option value="PRIVATE">비공개</option>
        </select>
      </S.SettingItem>
      <S.CreateBtn onClick={onSubmit}>새 노트 생성하기</S.CreateBtn>
    </S.Card>
  );
}