import About from "../../components/main/About/index";
import FAQ from "../../components/main/FAQ/index";
import Hero from "../../components/main/Hero/index";
import Footer from "../../shared/components/footer";
import Header from "../../shared/components/topbar";
import * as S from "../../shared/style/main/main.style"; // 아까 만든 전체 스타일 파일

function Mainpages() {
  return (
    <S.Tmain>
      {/* 1. 상단 바 (Topbar/Header) */}
      <Header />

      <S.ContentArea>
        {/* 2. 메인 타이틀 & 이미지 (Hero) */}
        <Hero />

        {/* 3. 서비스 소개 (About) */}
        <About />

        {/* 4. 질문 답변 (FAQ) */}
        <FAQ />
      </S.ContentArea>

      {/* 5. 푸터 (Footer) */}
      <Footer />
    </S.Tmain>
  );
}

export default Mainpages;
