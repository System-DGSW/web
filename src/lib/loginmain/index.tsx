import { useLocation } from "react-router-dom";

export const useActiveMenu = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "";
  
  const titles: Record<string, string> = {
    home: "홈",
    note: "내 노트",
    add: "노트 작성",
    profile: "프로필",
  };

  return {
    active: path,
    title: titles[path] || "환영합니다"
  };
};