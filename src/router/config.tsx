import WelcomePage from "../pages/WelcomePage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import type { RouteObject } from "react-router";
export const route = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/mainPage",
    element: <MainPage />,
    // children: [
    //   {
    //     path: "/a",
    //     element: <WelcomePage />,
    //   },
    //   {
    //     path: "/b",
    //     element: <WelcomePage />,
    //   },
    // ],
  },
  {
    path: "/filterPagePage",
    element: <MainPage />,
    children: [],
  },
];
