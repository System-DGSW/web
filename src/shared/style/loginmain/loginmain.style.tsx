import styled from "styled-components";

// --- 스타일 정의 ---

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const SidebarWrapper = styled.nav`
  width: 280px;
  min-width: 280px;
  flex-shrink: 0;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const LogoContainer = styled.div`
  height: 70px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 800;
  color: #1a1a1a;
  cursor: pointer;
  gap: 12px;

  img {
    width: 36px;
    height: 36px;
  }
`;

const MenuList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem 2rem 1.2rem;
  gap: 8px;
`;

const NavButton = styled.button<{
  $active?: boolean;
  $isLogout?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 이전 요청하신 가운데 정렬 유지 */
  width: 100%;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 12px;
  background: ${(props) => (props.$active ? "#f0f7ff" : "transparent")};
  color: ${(props) =>
    props.$isLogout ? "#dc2626" : props.$active ? "#2563eb" : "#4b5563"};
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  margin-top: ${(props) => (props.$isLogout ? "auto" : "0")};

  &:hover {
    background-color: ${(props) => (props.$isLogout ? "#fef2f2" : "#f9fafb")};
  }
`;

const IconBox = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  .IC,
  .ICE {
    width: 24px;
    height: 24px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #f9fafb;
`;

const TopHeader = styled.header`
  height: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2.5rem;
  overflow-y: auto;
`;

// --- 한 번에 내보내기 ---
export {
  MainContainer,
  SidebarWrapper,
  LogoContainer,
  MenuList,
  NavButton,
  IconBox,
  ContentArea,
  TopHeader,
  MainContent,
};