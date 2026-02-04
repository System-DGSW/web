import styled from "styled-components";

// --- 스타일 정의 ---

// 컨테이너: 3열 그리드 레이아웃
const NHcon = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 2.5rem;
  overflow-y: auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// 개별 카드
const NNoteCard = styled.div`
  min-height: 19rem;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

// 텍스트 영역 (버튼을 아래로 밀어내기 위해 flex: 1 적용)
const NContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NNoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 10px;
`;

const NNoteTitle = styled.h3`
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 700;
  color: #1a1a1a;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const NNoteAuthor = styled.span`
  font-size: 0.95rem;
  color: #9ca3af;
  white-space: nowrap;
  font-weight: 500;
`;

const NNoteSummary = styled.p`
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.6;
  margin-top: 0.5rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const NViewButton = styled.button`
  flex-shrink: 0;
  width: 100%;
  height: 3.2rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

// --- 한 번에 내보내기 ---
export {
  NContentWrapper,
  NHcon,
  NNoteAuthor,
  NNoteCard,
  NNoteHeader,
  NNoteSummary,
  NNoteTitle,
  NViewButton,
};
