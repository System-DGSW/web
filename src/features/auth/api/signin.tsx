import axiosInstance from "../../../api/axiosInstance";
import { LoginFormData } from "../model/type";


export const postSignin = async (data: LoginFormData) => {
  const response = await axiosInstance.post("/auth/signin", data);
  return response.data;
};
