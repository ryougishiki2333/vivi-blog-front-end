import MainPage from "../pages/mainPage";
import ManagePage from "../pages/ManagePage";
import WelcomePage from "../pages/WelcomePage";
import ArticlePage from "../pages/ArticlePage";
import SignUpPage from "../pages/SignUpPage";
import WritePage from "../pages/WritePage";
import MainPageDetail from "../components/diffPageDetail/MainPageDetail";
import FilterPageDetail from "../components/diffPageDetail/FilterPageDetail";
import ManyTagPageDetail from "../components/diffPageDetail/ManyTagPageDetail";
import AboutPageDetail from "../components/diffPageDetail/AboutPageDetail";
import ArticlePageDetail from "../components/diffPageDetail/ArticlePageDetail";
import SignUpPageDetail from "../components/diffPageDetail/SignUpPageDetail";
import InnerPageDetail from "../components/diffPageDetail/InnerPageDetail";
import ManageMainDetail from "../components/diffPageDetail/ManageMainDetail";
import ManageArticleDetail from "../components/diffPageDetail/ManageArticleDetail";
import ManageCommentDetail from "../components/diffPageDetail/ManageCommentDetail";
import ManagePageDetail from "../components/diffPageDetail/ManagePageDetail";
import ManageTagDetail from "../components/diffPageDetail/ManageTagDetail";
import ManageVisitorDetail from "../components/diffPageDetail/ManageVisitorDetail";
import RequireAuth from "./RequireAuth";

// export const

export const route = [
  // {
  //   path: "/",
  //   element: <WelcomePage />,
  // },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <MainPageDetail />,
      },
      {
        path: "/filterPage",
        element: <FilterPageDetail />,
      },
      {
        path: "/tagPage",
        element: <ManyTagPageDetail />,
      },
      {
        path: "/aboutPage",
        element: <AboutPageDetail />,
      },
    ],
  },
  {
    path: "/article",
    element: <ArticlePage />,
    children: [
      {
        path: "/article/:id",
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
      // {
      //   path: "/visitor/inner",
      //   element: <InnerPageDetail />,
      // },
    ],
  },
  {
    path: "/manage",
    element: (
      <RequireAuth>
        <WritePage />
      </RequireAuth>
    ),
  },
  // {
  //   path: "/manage",
  //   element: <ManagePage />,
  //   children: [
  //     {
  //       path: "/manage/main",
  //       element: <ManageMainDetail />,
  //     },
  //     {
  //       path: "/manage/visitor",
  //       element: <ManageVisitorDetail />,
  //     },
  //     {
  //       path: "/manage/page",
  //       element: <ManagePageDetail />,
  //     },
  //     {
  //       path: "/manage/tag",
  //       element: <ManageTagDetail />,
  //     },
  //     {
  //       path: "/manage/comment",
  //       element: <ManageCommentDetail />,
  //     },
  //     {
  //       path: "/manage/list",
  //       element: <ManageArticleDetail />,
  //     },
  //   ],
  // },
];
