import * as S from '../../../shared/style/add/add.style';
export default function NoteForm({ data, onChange }: { data: any, onChange: any }) {
  return (
    <S.Card>
      <S.InputBox>
        <label>노트 제목</label>
        <input 
          value={data.title} 
          onChange={(e) => onChange("title", e.target.value)} 
          placeholder="노트 제목을 입력하세요" 
        />
      </S.InputBox>
      <S.InputBox>
        <label>노트 내용</label>
        <textarea 
          value={data.content}
          onChange={(e) => onChange("content", e.target.value)}
          placeholder="학습 내용을 작성해주세요." 
        />
      </S.InputBox>
    </S.Card>
  );
}