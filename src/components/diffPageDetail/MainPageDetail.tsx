import MainLeft from "../globalContent/MainLeft";
import NeatMapZone from "../righterZone/NeatMapZone";
import OverviewZone from "../righterZone/OverviewZone";
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
          <NeatMapZone></NeatMapZone>
          <OverviewZone></OverviewZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
