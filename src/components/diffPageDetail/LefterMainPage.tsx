import styled from "styled-components";
import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import DataBar from "../lefterBar/DataBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
import OtherFrameBar from "../lefterBar/OtherFrameBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";

const LefterMainPage: React.FC = () => {
  const Wrapper = styled.div`
    background: #f9b3e4;
    width: 100%;
    padding: 10px;
  `;

  return (
    <Wrapper>
      <InfoBar></InfoBar>
      <AnnounceBar></AnnounceBar>
      <ClassificationBar></ClassificationBar>
      <DataBar></DataBar>
      <OtherFrameBar></OtherFrameBar>
      <OtherLinkBar></OtherLinkBar>
    </Wrapper>
  );
};

export default LefterMainPage;
