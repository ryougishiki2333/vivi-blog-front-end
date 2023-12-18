import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import InfoBar from "../components/lefterBar/InfoBar";
import AnnounceBar from "../components/lefterBar/AnnounceBar";
import ClassificationBar from "../components/lefterBar/ClassificationBar";
import OtherLinkBar from "../components/lefterBar/OtherLinkBar";

const ArticlePage: React.FC = () => {
  return (
    <>
      <NavigationFloator />
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
      <ScrollRestoration />
    </>
  );
};

export default ArticlePage;
