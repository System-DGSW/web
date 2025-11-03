import { atom } from "recoil";

export const todoState = atom<string[]>({
  key: "todoState",
  default: ["공부하기", "운동하기"],
});
export const login = atom<string>({
    key:"login",
    default:"null"
})