import styled from "styled-components";

// --- 스타일 정의 ---

// 1. 전체 레이아웃
const Tmain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 2. 헤더 (Topbar)
const Topbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 2rem;
  cursor: pointer;

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
  }
  span {
    font-weight: 800;
    font-size: 1.5rem;
    color: #111827;
  }

  @media (max-width: 480px) {
    margin-left: 12px;
    img {
      width: 2rem;
      height: 2rem;
    }
    span {
      font-size: 16px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-right: 2rem;
  @media (max-width: 480px) {
    margin-right: 12px;
    gap: 4px;
  }
`;

// 3. 히어로 섹션 (Hero)
const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 80px);
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const HeroText = styled.div`
  padding: 3rem 4rem;
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.2;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    color: #2563eb;
    margin: 0.5rem 0 1.5rem;
  }
  p {
    font-size: 1.125rem;
    color: #6b7280;
    margin: 0.25rem 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    h1,
    h2 {
      font-size: 2rem;
    }
  }
`;

const HeroImage = styled.div`
  width: 100%; /* 예시 크기, 부모 컨테이너 크기 설정 */
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover; /* CSS로 한 번 더 제어 */
  }
`;

// 4. 소개 섹션 (About)
const AboutSection = styled.section`
  background-color: #f9fafb;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #111827;
  }
  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 1rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

const IconCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

// 5. 질문 섹션 (FAQ)
const FAQSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background-color: #e5e8ea;
  border-radius: 15px;
  padding: 1.5rem;
  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }
  p {
    color: #4b5563;
    margin: 0;
    line-height: 1.6;
  }
`;

// 6. 푸터 (Footer)
const FooterWrapper = styled.footer`
  width: 100%;
`;

const FooterTitle = styled.div`
  padding: 2rem 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2663eb;
  border-bottom: 1px solid #f0f1f2;
`;

const FooterInfo = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: #a4b1be;
    font-size: 0.938rem;
    margin: 0;
  }
`;

// 공통 버튼 컴포넌트
const StyledButton = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: ${(props) =>
    props.$variant === "primary" ? "none" : "1px solid #e5e7eb"};
  background-color: ${(props) =>
    props.$variant === "primary" ? "#2563eb" : "white"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#111827")};
  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary" ? "#1d4ed8" : "#f9fafb"};
  }
`;

// --- 한 번에 내보내기 ---
export {
  AboutSection,
  ButtonGroup,
  CardGrid,
  ContentArea,
  FAQItem,
  FAQList,
  FAQSection,
  FeatureCard,
  FooterInfo,
  FooterTitle,
  FooterWrapper,
  HeroImage,
  HeroSection,
  HeroText,
  IconCircle,
  LogoGroup,
  SectionHeader,
  StyledButton,
  Tmain,
  Topbar,
};
