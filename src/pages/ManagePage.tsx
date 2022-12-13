import BackToHomePageFloator from "../components/globalFloator/BackToHomePageFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import ManageLeft from "../components/globalContent/ManageLeft";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";

const ManagePage: React.FC = () => {
  return (
    <>
      <BackToHomePageFloator />
      <ContentWrapper>
        <LefterWrapper>
          <ManageLeft />
        </LefterWrapper>
        <RighterWrapper>
          <Outlet />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />
    </>
  );
};

export default ManagePage;
