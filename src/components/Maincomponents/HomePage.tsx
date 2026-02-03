import "../../css/Maincomponents/Home.css";

// 1. 데이터 구조 정의
interface NoteItem {
  id: number;
  title: string;
  author: string;
  summary: string;
}

function HomePage() {
  const dummyData: NoteItem[] = [
    {
      id: 1,
      title: "명품 디자인의 역사",
      author: "김철수",
      summary: "시대를 관통하는 디자인 철학의 변천사와 핵심 요소 분석",
    },
    {
      id: 2,
      title: "리액트 마스터 가이드",
      author: "이영희",
      summary: "컴포넌트 생명주기와 훅(Hooks)의 원리 완벽 정리",
    },
    {
      id: 3,
      title: "도쿄 맛집 탐방기",
      author: "박민준",
      summary: "미슐랭 스타 레스토랑부터 숨은 골목 맛집까지 솔직 후기",
    },
    {
      id: 4,
      title: "미니멀리즘 인테리어",
      author: "최유진",
      summary: "좁은 공간을 넓게 사용하는 마법 같은 정리 수납 노하우",
    },
    {
      id: 5,
      title: "인공지능의 미래",
      author: "정현우",
      summary: "생성형 AI가 가져올 산업 구조의 변화와 직업의 미래",
    },
    {
      id: 6,
      title: "비건 베이킹 레시피",
      author: "강지민",
      summary: "우유와 달걀 없이도 촉촉하고 맛있는 브라우니 만들기",
    },
    {
      id: 7,
      title: "2024 재테크 전략",
      author: "조용훈",
      summary: "고금리 시대에 적합한 자산 배분과 절세 전략 제안",
    },
    {
      id: 8,
      title: "유럽 배낭여행 꿀팁",
      author: "윤서준",
      summary: "유레일 패스 최적의 경로 설정과 소매치기 예방 가이드",
    },
    {
      id: 9,
      title: "마음 챙김 명상법",
      author: "한예지",
      summary: "하루 10분 투자로 스트레스를 해소하고 집중력을 높이는 법",
    },
    {
      id: 10,
      title: "파이썬 데이터 분석",
      author: "서동욱",
      summary: "Pandas를 활용한 실전 데이터 시각화와 통계 분석 기법",
    },
    {
      id: 11,
      title: "커피 브루잉 가이드",
      author: "임지수",
      summary: "원두 종류에 따른 최적의 추출 온도와 맛의 상관관계",
    },
    {
      id: 12,
      title: "심리 스릴러 소설 리뷰",
      author: "장태민",
      summary: "반전의 반전을 거듭하는 추천 도서 5권 심층 분석",
    },
  ];

  return (
    <div className="Hcon">
      {dummyData.map((item: NoteItem, i) => (
        <div key={i} className="note-card">
          <div className="All">
            <div className="note-header">
              <h3 className="note-title">{item.title}</h3>
              <span className="note-author">{item.author}</span>
            </div>
            <p className="note-summary">{item.summary}</p>
          </div>
          <button className="bge">보기</button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
