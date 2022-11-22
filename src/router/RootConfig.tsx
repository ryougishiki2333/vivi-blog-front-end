import WelcomePage from "../pages/WelcomePage";
import LefterMainPage from "../components/diffPageDetail/LefterMainPage";
import MainPage from "../pages/MainPage";
export const route = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/mainPage",
    element: <MainPage />,
    children: [
      {
        path: "/mainPage",
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
