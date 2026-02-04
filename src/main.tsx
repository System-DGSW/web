import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./router.tsx";
import { GlobalStyle } from "./style/GlobalStyle";

createRoot(document.getElementById("root")!).render(
  <>
    {/* GlobalStyle은 이렇게 단독 태그로 선언해야 합니다. */}
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </>,
);
