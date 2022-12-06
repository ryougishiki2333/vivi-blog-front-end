import MainLeft from "../globalContent/MainLeft";
import FilterResultZone from "../righterZone/FilterResultZone";
import WelcomeWrapper from "../globalContent/Welcome";
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
          <FilterResultZone></FilterResultZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
