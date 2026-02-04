import * as S from "../../../shared/style/add/add.style";
import NoteForm from "./noteform";
import QuizSettings from "./quizsetting";
import PublishSettings from "./publishSetting";
import WriteTips from "./writeTip";
//응애
function Add() {
  return (
    <S.AC>
      <S.AddContainer>
        {/* 왼쪽 영역 */}
        <S.MainSection>
          <NoteForm />
        </S.MainSection>

        {/* 오른쪽 영역 */}
        <S.SideSection>
          <QuizSettings />
          <PublishSettings />
          <WriteTips />
        </S.SideSection>
      </S.AddContainer>
    </S.AC>
  );
}

export default Add;