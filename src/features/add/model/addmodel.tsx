import { useState } from "react";
import { CreateNoteRequest } from "../model/type"; 
import { postCreateNote } from "../api/CrateNote"; // 이미 잘 만드신 API 함수

export const useAddNote = () => {
  const [formData, setFormData] = useState<CreateNoteRequest>({
    title: "",
    content: "",
    visibility: "PUBLIC",
    subscription: "",
  });

  const updateField = (field: keyof CreateNoteRequest, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitNote = async () => {
    // 유효성 검사
    if (!formData.title || !formData.content || !formData.subscription) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    try {
      const result = await postCreateNote(formData);
      
      console.log("서버 응답:", result);
      alert("노트가 성공적으로 생성되었습니다!");
    } catch (error: any) {
      console.error("노트 생성 에러:", error);
      const errorMessage = error.response?.data?.message || "생성에 실패했습니다. 다시 시도해주세요.";
      alert(errorMessage);
    }
  };

  return { formData, updateField, submitNote };
};