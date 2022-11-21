import WelcomePage from "../pages/WelcomePage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
export const route = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/mainPage",
    element: <MainPage />,
  },
  {
    path: "/filterPage",
    element: <MainPage />,
  },
];
