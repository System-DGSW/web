import styled from "styled-components";

// --- 스타일 정의 ---

export const AC = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f8f9fa;
  box-sizing: border-box;
`;

export const AddContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e1e4e8;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
`;

export const MainSection = styled.div`
  flex: 2;
  min-width: 0;
`;

export const InputBox = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 14px;
    border: 1px solid #e1e4e8;
    border-radius: 10px;
    font-size: 1rem;
    box-sizing: border-box;
    outline-color: #3b82f6;
    transition: all 0.2s;

    &:focus {
      border-color: #3b82f6;
      background-color: #fff;
    }
  }

  textarea {
    height: 450px;
    resize: none;
    line-height: 1.6;
  }
`;

export const SideSection = styled.div`
  width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SideTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 16px 0;
  font-weight: 800;
`;

export const SettingItem = styled.div`
  label {
    display: block;
    font-weight: 700; 
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    color: #444;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const BlueInfo = styled.p`
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 10px;
  line-height: 1.4;
`;

export const CreateBtn = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

export const TipCard = styled(Card)`
  background-color: #eff6ff;
  border: 1px solid #dbeafe;

  ${SideTitle} {
    color: #1e40af;
  }
`;

export const TipList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #1e40af;
    font-size: 0.9rem;
    margin-bottom: 12px;
    font-weight: 600;

    span {
      font-weight: 900;
    }
  }
`;
