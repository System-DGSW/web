import styled, { keyframes, css } from "styled-components";

const SfadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, -20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
`;

export const SCardBox = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 28rem; /* 로그인보다 조금 더 넓게 설정 */
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
    margin-left: 2px;
  }
`;

export const SInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const SToggleButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    color: #4b5563;
  }
`;

export const SSubmitButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

export const SToast = styled.div<{ $type: "success" | "error" | "" }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
  z-index: 100;
  animation: ${SfadeInOut} 3s forwards;
  
  ${props => props.$type === "success" && css`background-color: #10b981;`}
  ${props => props.$type === "error" && css`background-color: #ef4444;`}
`;

//로그인 스타일드 컴포넌트




// 애니메이션
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, -20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
`;

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e5e7eb;
  font-family: "Pretendard", sans-serif;
  overflow: hidden;
`;

export const LToast = styled.div<{ $type: "success" | "error" | "" }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  z-index: 9999;
  color: white;
  animation: ${fadeInOut} 3s ease-in-out;
  background-color: ${(props) =>
    props.$type === "success" ? "#4caf50" : "#f44336"};
  box-shadow: 0 4px 10px
    ${(props) =>
      props.$type === "success"
        ? "rgba(76, 175, 80, 0.3)"
        : "rgba(244, 67, 54, 0.3)"};
`;

export const LHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
`;

export const LLogoBox = styled.div`
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

export const LHeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: #111827;
`;

export const LMainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
`;

export const LLoginWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LTitleSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LMainTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
`;

export const LSignupText = styled.p`
  font-size: 1.125rem;
  color: #6b7280;

  button {
    color: #2563eb;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.125rem;
    margin-left: 8px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LLoginCard = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 22rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LFormGroup = styled.div`
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

export const LInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LInput = styled.input`
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
`;

export const LPwToggle = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LSubmitButton = styled.button`
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

export const LForgotLink = styled.button`
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 500;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
