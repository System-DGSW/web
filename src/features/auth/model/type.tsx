export interface SignupFormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface ToastState {
  message: string;
  type: "success" | "error" | "";
}

export interface LoginFormData {
  username: string;
  password: string;
}
export interface ToastData {
  message: string;
  type: "success" | "error" | "";
}