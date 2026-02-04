import * as S from "../../../shared/style/main/main.style";

export default function FAQ() {
  const faqs = [
    { q: "서비스 이용료는 얼마인가요?", a: "기본적인 서비스는 무료로 제공됩니다." },
    { q: "모바일에서도 사용 가능한가요?", a: "네, 반응형 웹으로 최적화되어 있습니다." },
  ];

  return (
    <S.FAQSection>
      <S.SectionHeader>
        <h2>자주 묻는 질문</h2>
        <p>궁금한 점을 확인해 보세요.</p>
      </S.SectionHeader>
      <S.FAQList>
        {faqs.map((faq, i) => (
          <S.FAQItem key={i}>
            <h4>{faq.q}</h4>
            <p>{faq.a}</p>
          </S.FAQItem>
        ))}
      </S.FAQList>
    </S.FAQSection>
  );
}