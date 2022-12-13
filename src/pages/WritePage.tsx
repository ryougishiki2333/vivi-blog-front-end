import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import WriteLeft from "../components/globalContent/WriteLeft";
import WriteRight from "../components/globalContent/WriteRight";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import BackToManagePageFloator from "../components/globalFloator/BackToManagePageFloator";

const WritePage: React.FC = () => {
  return (
    <>
      <BackToManagePageFloator />
      <ContentWrapper>
        <LefterWrapper>
          <WriteLeft />
        </LefterWrapper>
        <RighterWrapper>
          <WriteRight />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />
    </>
  );
};

export default WritePage;
