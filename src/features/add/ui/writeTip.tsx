import * as S from "../../../shared/style/add/add.style";

export default function WriteTips() {
  return (
    <S.TipCard>
      <S.SideTitle>💡 작성팁</S.SideTitle>
      <S.TipList>
        <li><span>✓</span> 핵심 개념을 명확하게 정리하세요</li>
        <li><span>✓</span> 예시와 설명을 함께 작성하세요</li>
        <li><span>✓</span> 구조화된 형태로 정리하세요</li>
        <li><span>✓</span> 중요한 키워드를 포함하세요</li>
      </S.TipList>
    </S.TipCard>
  );
}