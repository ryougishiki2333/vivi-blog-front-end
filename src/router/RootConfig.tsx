import WelcomePage from "../pages/WelcomePage";
import MainPageDetail from "../components/diffPageDetail/MainPageDetail";
import FilterPageDetail from "../components/diffPageDetail/FilterPageDetail";
import ArticlePage from "../pages/ArticlePage";
import SignUpPage from "../pages/SignUpPage";
import ManyTagPageDetail from "../components/diffPageDetail/ManyTagPageDetail";
import AboutPageDetail from "../components/diffPageDetail/AboutPageDetail";
import ArticlePageDetail from "../components/diffPageDetail/ArticlePageDetail";
import SignUpPageDetail from "../components/diffPageDetail/SignUpPageDetail";
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
    path: "/article",
    element: <ArticlePage />,
    children: [
      {
        path: "/article",
        element: <ArticlePageDetail />,
      },
    ],
  },
  {
    path: "/visitor",
    element: <SignUpPage />,
    children: [
      {
        path: "/visitor/signUp",
        element: <SignUpPageDetail />,
      },
      {
        path: "/visitor/inner",
        element: <SignUpPageDetail />,
      },
    ],
  },
];
