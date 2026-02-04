import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { SignupFormData, ToastState } from "./type";
import { postSignup } from "../api/signup"; // 분리한 API 함수 가져오기

export const useSignup = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState<SignupFormData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", type: "" });
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const showToast = (message: string, type: "success" | "error" = "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignup = async () => {
    const { username, password, confirmPassword, email } = form;
    if (!username || !password || !email) {
      showToast("모든 필드를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      showToast("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);
    try {
      await postSignup({ username, password, email });
      showToast("회원가입에 성공했습니다!", "success");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "회원가입 중 오류가 발생했습니다.";
      showToast(errorMsg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    toast,
    showPw,
    showConfirmPw,
    setShowPw,
    setShowConfirmPw,
    handleChange,
    handleSignup,
  };
};