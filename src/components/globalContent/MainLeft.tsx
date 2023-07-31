import InfoBar from "../lefterBar/InfoBar";
import AnnounceBar from "../lefterBar/AnnounceBar";
import ClassificationBar from "../lefterBar/ClassificationBar";
import OtherLinkBar from "../lefterBar/OtherLinkBar";

const MainLeft: React.FC = () => {
  return (
    <>
      <InfoBar />
      <AnnounceBar />
      <ClassificationBar />
      <OtherLinkBar />
      {/* <InfoLinkBar /> */}
    </>
  );
};

export default MainLeft;
