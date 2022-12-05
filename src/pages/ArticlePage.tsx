import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { ScrollRestoration } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <>
      <NavigationFloator />
      <ScrollRestoration />
    </>
  );
};

export default MainPage;
