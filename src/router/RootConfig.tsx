import WelcomePage from "../pages/WelcomePage";
import LefterMainPage from "../components/diffPageDetail/LefterMainPage";
import MainPage from "../pages/MainPage";
export const route = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "/main/mainPage",
        element: <LefterMainPage />,
      },
      {
        path: "/main/filterPage",
        element: <LefterMainPage />,
      },
      {
        path: "/main/articlePage",
        element: <LefterMainPage />,
      },
      {
        path: "/main/ownerPage",
        element: <LefterMainPage />,
      },
      {
        path: "/main/tagPage",
        element: <LefterMainPage />,
      },
      {
        path: "/main/tagPage",
        element: <LefterMainPage />,
      },
    ],
  },
  {
    path: "/filterPage",
    element: <MainPage />,
    children: [],
  },
];
