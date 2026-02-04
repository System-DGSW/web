import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, -20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
`;

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #e5e7eb;
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
    width: 24px;
    height: 24px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 22rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Toast = styled.div<{ type: "success" | "error" | "" }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  z-index: 9999;
  animation: ${fadeInOut} 3s ease-in-out;
  color: white;
  background-color: ${props => props.type === "success" ? "#4caf50" : "#f44336"};
`;

export const SignupButton = styled.button`
  width: 80%;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 1.8rem;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;