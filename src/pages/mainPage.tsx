import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import MainLeft from "../components/globalContent/MainLeft";
import Welcome from "../components/globalContent/Welcome";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import InviteSignUpFloator from "../components/globalFloator/InviteSignUpFloator";

const MainPage: React.FC = () => {
  return (
    <>
      <NavigationFloator />
      <InviteSignUpFloator />
      <Welcome />
      <ContentWrapper>
        <LefterWrapper>
          <MainLeft />
        </LefterWrapper>
        <RighterWrapper>
          <Outlet />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />
    </>
  );
};

export default MainPage;
