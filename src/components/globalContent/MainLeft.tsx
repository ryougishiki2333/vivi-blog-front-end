import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import DataBar from "../lefterBar/DataBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
import OtherFrameBar from "../lefterBar/OtherFrameBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";

const MainLeft: React.FC = () => {
  return (
    <>
      <InfoBar />
      <AnnounceBar />
      <ClassificationBar />
      <DataBar />
      <OtherFrameBar />
      <OtherLinkBar />
    </>
  );
};

export default MainLeft;
