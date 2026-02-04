export interface CreateNoteRequest {
  title: string;
  content: string;
  visibility: "PUBLIC" | "PRIVATE";
  subscription: "DAILY" | "ONE_TIME" | "NO" | ""; // 초기값 공백 포함
}