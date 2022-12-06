import MainLeft from "../globalContent/MainLeft";
import WelcomeWrapper from "../globalContent/Welcome";
import ManyTagZone from "../righterZone/ManyTagZone";
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
          <ManyTagZone></ManyTagZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
