import WelcomePage from "../pages/WelcomePage";
import MainPageDetail from "../components/diffPageDetail/MainPageDetail";
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
        element: <MainPageDetail />,
      },
      // {
      //   path: "/main/filterPage",
      //   element: <LefterMainPage />,
      // },
      // {
      //   path: "/main/articlePage",
      //   element: <LefterMainPage />,
      // },
      // {
      //   path: "/main/ownerPage",
      //   element: <LefterMainPage />,
      // },
      // {
      //   path: "/main/tagPage",
      //   element: <LefterMainPage />,
      // },
      // {
      //   path: "/main/tagPage",
      //   element: <LefterMainPage />,
      // },
    ],
  },
  {
    path: "/filterPage",
    element: <MainPage />,
    children: [],
  },
];
