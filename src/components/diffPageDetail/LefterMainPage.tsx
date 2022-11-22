import styled from "styled-components";
import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import DataBar from "../lefterBar/DataBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
// import DataInfoBar from "../lefterBar/InfoBar"
// import DataInfoBar from "../lefterBar/InfoBar"
// import DataInfoBar from "../lefterBar/InfoBar"

const LefterMainPage: React.FC = () => {
  const Wrapper = styled.div`
    background: #f9b3e4;
    width: 100%;
  `;

  return (
    <Wrapper>
      <InfoBar></InfoBar>
      <AnnounceBar></AnnounceBar>
      <ClassificationBar></ClassificationBar>
      <DataBar></DataBar>
    </Wrapper>
  );
};

export default LefterMainPage;
