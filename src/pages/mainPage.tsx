import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Welcome from "../components/globalContent/Welcome";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import InviteSignUpFloator from "../components/globalFloator/InviteSignUpFloator";
import InfoBar from "../components/lefterBar/InfoBar";
import AnnounceBar from "../components/lefterBar/AnnounceBar";
import ClassificationBar from "../components/lefterBar/ClassificationBar";
import OtherLinkBar from "../components/lefterBar/OtherLinkBar";

const MainPage: React.FC = () => {
  return (
    <>
      <NavigationFloator />
      <Welcome />
      <ContentWrapper>
        <LefterWrapper>
          <InfoBar />
          <AnnounceBar />
          <ClassificationBar />
          <OtherLinkBar />
        </LefterWrapper>
        <RighterWrapper>
          <Outlet />
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPage;
