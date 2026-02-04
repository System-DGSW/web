import { useSignin } from "../model/useSignin";
import * as S from "./styld";
import { Eye, EyeOff } from "lucide-react";

export const LoginForm = () => {
  // ✅ 훅에서 리턴한 값들을 가져옵니다.
  const { 
    form, 
    toast, 
    isLoading, 
    showPw, 
    setShowPw, 
    handleChange, 
    handleLogin, 
    handleKeyPress  
  } = useSignin();

  return (
    <S.LLoginCard>
      <S.LFormGroup>
        <label htmlFor="username">아이디</label>
        <S.LInput
          id="username"
          value={form.username}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="아이디를 입력하세요"
        />
      </S.LFormGroup>

      <S.LFormGroup>
        <label htmlFor="password">비밀번호</label>
        <S.LInputWrapper>
          <S.LInput
            id="password"
            type={showPw ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="비밀번호를 입력하세요"
          />
          <S.LPwToggle onClick={() => setShowPw(!showPw)} type="button">
            {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
          </S.LPwToggle>
        </S.LInputWrapper>
      </S.LFormGroup>

      <S.LSubmitButton onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "로그인 중..." : "로그인"}
      </S.LSubmitButton>
      
      {toast.message && <S.LToast $type={toast.type}>{toast.message}</S.LToast>}
    </S.LLoginCard>
  );
};