import * as S from "../../../shared/style/add/add.style";
import { useAddNote } from "../model/addmodel"; // 우리가 만든 모델 훅
import NoteForm from "./noteform";
import PublishSetting from "./publishSetting";
import QuizSetting from "./quizsetting";
import WriteTips from "./writeTip";
export default function AddPage() {
  // 1. 모델에서 데이터와 수정 함수, 제출 함수를 가져옵니다.
  const { formData, updateField, submitNote } = useAddNote();

  return (
    <S.AC>
      <S.AddContainer>
        {/* 왼쪽 영역: 제목과 내용을 작성하는 폼 */}
        <S.MainSection>
          <NoteForm data={formData} onChange={updateField} />
        </S.MainSection>

        {/* 오른쪽 영역: 퀴즈 설정 및 배포(생성) 버튼 */}
        <S.SideSection>
          {/* 퀴즈 기간 설정 (DAILY, ONE_TIME, NO) */}
          <QuizSetting data={formData} onChange={updateField} />

          {/* 공개 여부 및 최종 생성 버튼 */}
          <PublishSetting
            data={formData}
            onChange={updateField}
            onSubmit={submitNote}
          />
          <WriteTips></WriteTips>
        </S.SideSection>
      </S.AddContainer>
    </S.AC>
  );
}
