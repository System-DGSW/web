import * as S from "../../../shared/style/home/home.style";
import { dummyData } from "../../../constants/dummy/dummy";
function Home() {

  return (
    <S.Hcon>
      {dummyData.map((item) => (
        <S.NoteCard key={item.id}>
          <S.ContentWrapper>
            <S.NoteHeader>
              <S.NoteTitle>{item.title}</S.NoteTitle>
              <S.NoteAuthor>{item.author}</S.NoteAuthor>
            </S.NoteHeader>
            <S.NoteSummary>{item.summary}</S.NoteSummary>
          </S.ContentWrapper>
          <S.ViewButton>보기</S.ViewButton>
        </S.NoteCard>
      ))}
    </S.Hcon>
  );
}

export default Home;