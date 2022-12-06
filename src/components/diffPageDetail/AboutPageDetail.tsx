import WelcomeWrapper from "../globalContent/Welcome";
import AboutZone from "../righterZone/AboutZone";
import MainLeft from "../globalContent/MainLeft";
import ContentWrapper from "../globalWrapper/ContentWrapper";
import LefterWrapper from "../globalWrapper/LefterWrapper";
import RighterWrapper from "../globalWrapper/RighterWrapper";

const MainPageDetail: React.FC = () => {
  return (
    <>
      <WelcomeWrapper />
      <ContentWrapper>
        <LefterWrapper>
          <MainLeft />
        </LefterWrapper>
        <RighterWrapper>
          <AboutZone />
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
