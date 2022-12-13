import DeleteListBar from "../lefterBar/DeleteListBar";
import DraftListBar from "../lefterBar/DraftListBar";
import PublishListBar from "../lefterBar/PublishListBar";

const WriteLeft: React.FC = () => {
  return (
    <>
      <DeleteListBar />
      <DraftListBar />
      <PublishListBar />
    </>
  );
};

export default WriteLeft;
