import * as S from "../../../shared/style/add/add.style";

export default function NoteForm() {
  return (
    <S.Card>
      <S.InputBox>
        <label>노트 제목</label>
        <input type="text" placeholder="노트 제목을 입력하세요" />
      </S.InputBox>

      <S.InputBox>
        <label>노트 내용</label>
        <textarea placeholder="학습 내용을 자세히 작성해주세요. AI가 이 내용을 바탕으로 퀴즈를 생성합니다." />
      </S.InputBox>

      <S.InputBox>
        <label>한줄요약</label>
        <input type="text" placeholder="노트 내용을 한줄요약해주세요" />
      </S.InputBox>
    </S.Card>
  );
}