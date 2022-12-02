import WelcomePage from "../pages/WelcomePage";
import MainPageDetail from "../components/diffPageDetail/MainPageDetail";
import FilterPageDetail from "../components/diffPageDetail/FilterPageDetail";
import ArticlePageDetail from "../components/diffPageDetail/ArticlePageDetail";
import ManyTagPageDetail from "../components/diffPageDetail/ManyTagPageDetail";
import AboutPageDetail from "../components/diffPageDetail/AboutPageDetail";
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
      {
        path: "/main/tagPage",
        element: <ManyTagPageDetail />,
      },
      {
        path: "/main/aboutPage",
        element: <AboutPageDetail />,
      },
    ],
  },
  {
    path: "/filterPage",
    element: <MainPage />,
    children: [],
  },
];
