import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import DataBar from "../lefterBar/DataBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";
import InfoLinkBar from "../lefterBar/InfoLinkBar";

const MainLeft: React.FC = () => {
  return (
    <>
      <InfoBar />
      <AnnounceBar />
      <ClassificationBar />
      <DataBar />
      <OtherLinkBar />
      <InfoLinkBar />
    </>
  );
};

export default MainLeft;
