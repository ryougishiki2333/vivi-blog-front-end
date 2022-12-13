import BackToHomePageFloator from "../components/globalFloator/BackToHomePageFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import MainLeft from "../components/globalContent/MainLeft";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";

const WritePage: React.FC = () => {
  return (
    <>
      <BackToHomePageFloator />
      <ScrollRestoration />
    </>
  );
};

export default WritePage;
