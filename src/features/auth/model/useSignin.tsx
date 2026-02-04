import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignin } from "../api/signin"; // 분리하신 API 함수 임포트
import { LoginFormData, ToastData } from "./type";

export const useSignin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [toast, setToast] = useState<ToastData>({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPw, setShowPw] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setToast({ message: "아이디와 비밀번호를 입력해주세요.", type: "error" });
      return;
    }

    setIsLoading(true);
    try {
      await postSignin(form);

      setToast({ message: "로그인 성공! 환영합니다.", type: "success" });

      // 로그인 성공 시 페이지 이동
      setTimeout(() => navigate("/main/home"), 1500);
    } catch (err: any) {
      // 에러 메시지 처리 (axios 에러 객체 구조에 따라 조정)
      const errorMessage = err.response?.data?.message || "로그인 실패";
      setToast({
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsLoading(false);
      // 토스트 메시지 3초 후 사라짐
      setTimeout(() => setToast({ message: "", type: "" }), 3000);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return {
    form,
    toast,
    isLoading,
    showPw,
    setShowPw,
    handleChange,
    handleLogin,
    handleKeyPress,
  };
};
