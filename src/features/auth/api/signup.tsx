import axiosInstance from "../../../api/axiosInstance";
import { SignupFormData } from "../model/type";

export const postSignup = async (data: Omit<SignupFormData, "confirmPassword">) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};
