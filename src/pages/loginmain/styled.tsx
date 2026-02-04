import styled from "styled-components";

// 전체 컨테이너
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 사이드바 (모바일에서는 하단 탭바)
export const SidebarWrapper = styled.nav`
  width: 260px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e6e7eb;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100% !important;
    height: 75px !important;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    flex-direction: row !important;
    border-right: none;
    border-top: 1px solid #e1e4e8;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
  }
`;

// 로고 영역
export const LogoContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 4rem 0 1.5rem 0;
  gap: 8px;
  cursor: pointer;

  img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`;

// 메뉴 버튼 컨테이너
export const MenuList = styled.div`
  width: 100%;
  padding: 2rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row !important;
    width: 100% !important;
    height: 100% !important;
    padding: 0 5px !important;
    gap: 0 !important;
    justify-content: space-around;
    align-items: center;
  }
`;

// 공통 버튼 스타일 (Props로 활성화 상태 전달)
export const NavButton = styled.button<{ $active?: boolean; $isLogout?: boolean }>`
  font-size: 1.1rem;
  width: 100%;
  height: 3.2rem;
  background-color: ${props => props.$active ? "rgba(59, 130, 246, 0.1)" : "transparent"};
  border: ${props => props.$active ? "2px solid #2563eb" : "3px solid transparent"};
  color: ${props => props.$active ? "#2563eb" : "#4b5563"};
  font-weight: 600;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.2rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: ${props => props.$isLogout ? "#fee2e2" : "rgba(59, 130, 246, 0.05)"};
    color: ${props => props.$isLogout ? "#dc2626" : "#2563eb"};
  }

  /* 로그아웃 버튼 전용 스타일 */
  ${props => props.$isLogout && `
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
    width: calc(100% - 2rem);
    justify-content: center;
    padding-left: 0;
    border: none;
  `}

  @media (max-width: 768px) {
    position: static !important;
    flex: 1 !important;
    height: 100% !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 0 !important;
    font-size: 0.7rem !important;
    background-color: transparent !important;
    border: none !important;
    color: ${props => props.$active ? "#3b82f6" : "#4b5563"};
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  .IC, .ICE {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    margin: 0 0 4px 0 !important;
  }
`;

// 오른쪽 콘텐츠 영역
export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding-bottom: 75px;
  }
`;

export const TopHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e7eb;
  flex-shrink: 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
  }

  .username {
    font-weight: 600;
    font-size: 1.1rem;
    color: #64748b;
  }

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0 1.5rem;
    h3 { font-size: 1.2rem; }
    .username { font-size: 0.9rem; }
  }
`;