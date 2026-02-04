import { Eye, EyeOff } from "lucide-react";
import { useSignup } from "../model/useSignup";
import * as S from "./styld";

export const SignupForm = () => {
  const {
    form,
    handleChange,
    handleSignup,
    isLoading,
    toast,
    showPw,
    setShowPw,
    showConfirmPw,
    setShowConfirmPw,
  } = useSignup();

  return (
    <S.SCardBox>
      {toast.message && <S.SToast $type={toast.type}>{toast.message}</S.SToast>}

      {/* 아이디 */}
      <S.SFormGroup>
        <label htmlFor="username">아이디</label>
        <S.SInput
          id="username"
          placeholder="사용할 아이디를 입력하세요"
          value={form.username}
          onChange={handleChange}
          disabled={isLoading}
        />
      </S.SFormGroup>

      {/* 이메일 */}
      <S.SFormGroup>
        <label htmlFor="email">이메일</label>
        <S.SInput
          id="email"
          type="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
        />
      </S.SFormGroup>

      {/* 비밀번호 */}
      <S.SFormGroup>
        <label htmlFor="password">비밀번호</label>
        <S.SInputWrapper>
          <S.SInput
            id="password"
            type={showPw ? "text" : "password"}
            placeholder="비밀번호 입력"
            value={form.password}
            onChange={handleChange}
            disabled={isLoading}
          />
          <S.SToggleButton onClick={() => setShowPw(!showPw)}>
            {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
          </S.SToggleButton>
        </S.SInputWrapper>
      </S.SFormGroup>

      {/* 비밀번호 확인 */}
      <S.SFormGroup>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <S.SInputWrapper>
          <S.SInput
            id="confirmPassword"
            type={showConfirmPw ? "text" : "password"}
            placeholder="비밀번호 재입력"
            value={form.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          <S.SToggleButton onClick={() => setShowConfirmPw(!showConfirmPw)}>
            {showConfirmPw ? <EyeOff size={20} /> : <Eye size={20} />}
          </S.SToggleButton>
        </S.SInputWrapper>
      </S.SFormGroup>

      <S.SSubmitButton onClick={handleSignup} disabled={isLoading}>
        {isLoading ? "처리 중..." : "회원가입 완료"}
      </S.SSubmitButton>
    </S.SCardBox>
  );
};