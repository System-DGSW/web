import axiosInstance from "../../../api/axiosInstance";
import { CreateNoteRequest } from "../model/type"; 

export const postCreateNote = async (data: CreateNoteRequest) => {
  const response = await axiosInstance.post("/notes", data);
  return response.data;
};
