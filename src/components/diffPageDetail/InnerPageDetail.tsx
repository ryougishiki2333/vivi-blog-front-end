import VisitorCollectionZone from "../righterZone/VisitorCollectionZone";
import VisitorHistoryZone from "../righterZone/VisitorHistoryZone";
import VisitorInfoZone from "../righterZone/VisitorInfoZone";
import VisitorReplyZone from "../righterZone/VisitorReplyZone";

const MainPageDetail: React.FC = () => {
  return (
    <>
      <VisitorInfoZone></VisitorInfoZone>
      <VisitorCollectionZone></VisitorCollectionZone>
      <VisitorHistoryZone></VisitorHistoryZone>
      <VisitorReplyZone></VisitorReplyZone>
    </>
  );
};

export default MainPageDetail;
