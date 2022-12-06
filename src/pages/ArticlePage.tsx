import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const ArticlePage: React.FC = () => {
  return (
    <>
      <NavigationFloator />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default ArticlePage;
