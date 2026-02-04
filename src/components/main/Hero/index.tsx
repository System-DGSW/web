import Study from "../../../shared/img/test/study.svg?react";
import * as S from "../../../shared/style/main/main.style";

export default function Hero() {
  return (
    <S.HeroSection>
      <S.HeroText>
        <h1>모든 기록을</h1>
        <h2>한눈에, Rezension</h2>
        <p>학습 노트를 정리하고 공유하며 더 깊게 성장하세요.</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <S.StyledButton $variant="primary">시작하기</S.StyledButton>
          <S.StyledButton>더 알아보기</S.StyledButton>
        </div>
      </S.HeroText>
      <S.HeroImage>
        <Study preserveAspectRatio="xMidYMid slice" />
      </S.HeroImage>
    </S.HeroSection>
  );
}
