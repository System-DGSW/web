import { dummyData } from "../../../constants/dummy/dummy";
import * as S from "../../../shared/style/note/note.style";
function Note() {

  return (
    <S.NHcon>
      {dummyData.map((item) => (
        <S.NNoteCard key={item.id}>
          <S.NContentWrapper>
            <S.NNoteHeader>
              <S.NNoteTitle>{item.title}</S.NNoteTitle>
              <S.NNoteAuthor>{item.author}</S.NNoteAuthor>
            </S.NNoteHeader>
            <S.NNoteSummary>{item.summary}</S.NNoteSummary>
          </S.NContentWrapper>
          <S.NViewButton>보기</S.NViewButton>
        </S.NNoteCard>
      ))}
    </S.NHcon>
  );
}

export default Note;