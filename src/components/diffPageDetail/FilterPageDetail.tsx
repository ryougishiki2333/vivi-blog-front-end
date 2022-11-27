import styled from "styled-components";
import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import DataBar from "../lefterBar/DataBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
import OtherFrameBar from "../lefterBar/OtherFrameBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";
import NeatMapZone from "../righterZone/NeatMapZone";
import OverviewZone from "../righterZone/OverviewZone";

const MainPageDetail: React.FC = () => {
  const WelcomeWrapper = styled.div`
    background: #f9b3e4;
    width: 100%;
    height: 300px;
    padding: 10px;
    border: solid;
  `;

  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
  `;

  const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
  `;
  const LefterWrapper = styled.div`
    background: #f9b3e4;
    width: 30%;
    padding: 10px;
    border: solid;
    text-align: center;
  `;
  const RighterWrapper = styled.div`
    background: #f9b3e4;
    width: 70%;
    padding: 10px;
    border: solid;
    text-align: center;
  `;

  return (
    <>
      <WelcomeWrapper>
        <Title>欢迎页</Title>
      </WelcomeWrapper>
      <ContentWrapper>
        <LefterWrapper>
          <InfoBar />
          <AnnounceBar />
          <ClassificationBar />
          <DataBar />
          <OtherFrameBar />
          <OtherLinkBar />
        </LefterWrapper>
        <RighterWrapper>
          <OverviewZone></OverviewZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
