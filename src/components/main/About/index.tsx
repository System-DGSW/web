import * as S from "../../../shared/style/main/main.style";
import { features } from "../../../constants/aboutdata/aboutdata";
export default function About() {


  return (
    <S.AboutSection>
      <S.SectionHeader>
        <h2>어떻게 사용하나요?</h2>
        <p>Rezension과 함께라면 학습이 즐거워집니다.</p>
      </S.SectionHeader>
      <S.CardGrid>
        {features.map((f, i) => (
          <S.FeatureCard key={i}>
            <S.IconCircle><img src={f.img} alt="icon" /></S.IconCircle>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </S.FeatureCard>
        ))}
      </S.CardGrid>
    </S.AboutSection>
  );
}