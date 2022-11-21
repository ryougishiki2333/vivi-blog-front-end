import LefterMainPage from "../components/diffPageContainer/LefterMainPage";
import LefterFilterPage from "../components/diffPageContainer/LefterFilterPage";

export const route = [
  {
    path: "/mainPage",
    element: <LefterMainPage />,
  },
  {
    path: "/filterPage",
    element: <LefterFilterPage />,
  },
];
