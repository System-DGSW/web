import * as S from "../../../shared/style/add/add.style";

export default function PublishSettings() {
  return (
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
  );
}
