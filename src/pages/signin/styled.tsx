import styled, { keyframes } from "styled-components";

// ✅ 애니메이션
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, -20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
`;

// ✅ 레이아웃
export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e5e7eb;
  font-family: "Pretendard", sans-serif;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
  
  h1 {
    font-size: 1.75rem;
    font-weight: 800;
    color: #111827;
  }
`;

export const LogoBox = styled.div`
  width: 45px;
  height: 45px;
  background-color: #2563eb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
    filter: invert(100%);
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
`;

// ✅ 카드 섹션 (회원가입의 CardBox와 통일)
export const CardBox = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 22rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

// ✅ 폼 요소
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &:disabled {
    background-color: #f3f4f6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

export const ActionButton = styled.button`
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: inherit;
  margin-left: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

// ✅ 토스트 (제네릭 대응 가능하게 수정)
export const Toast = styled.div<{ $type: "success" | "error" | "" }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  z-index: 9999;
  color: white;
  animation: ${fadeInOut} 3s ease-in-out;
  background-color: ${(props) =>
    props.$type === "success" ? "#10b981" : "#ef4444"};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;