import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import BackToManagePageFloator from "../components/globalFloator/BackToManagePageFloator";
import EditArticleZone from "../components/righterZone/EditArticleZone";
import EditArticleBar from "../components/lefterBar/EditArticleBar";

const WritePage: React.FC = () => {
  return (
    <>
      <BackToManagePageFloator />
      <ContentWrapper>
        <LefterWrapper>
          <EditArticleBar />
        </LefterWrapper>
        <RighterWrapper>
          <EditArticleZone />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />
    </>
  );
};

export default WritePage;
