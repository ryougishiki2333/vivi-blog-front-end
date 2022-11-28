import WelcomePage from "../pages/WelcomePage";
import MainPageDetail from "../components/diffPageDetail/MainPageDetail";
import FilterPageDetail from "../components/diffPageDetail/FilterPageDetail";
import ArticlePageDetail from "../components/diffPageDetail/ArticlePageDetail";
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
      {
        path: "/main/filterPage",
        element: <FilterPageDetail />,
      },
      {
        path: "/main/articlePage",
        element: <ArticlePageDetail />,
      },
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
