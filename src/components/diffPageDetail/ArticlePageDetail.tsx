import ArticleZone from "../righterZone/ArticleZone";
import ShareZone from "../righterZone/ShareZone";
import ScoreZone from "../righterZone/ScoreZone";
import ReplyZone from "../righterZone/ReplyZone";
import CommentZone from "../righterZone/CommentZone";

const ArticlePageDetail: React.FC = () => {
  return (
    <>
      <ArticleZone></ArticleZone>
      <ScoreZone></ScoreZone>
      <ShareZone></ShareZone>
      <CommentZone></CommentZone>
      <ReplyZone></ReplyZone>
    </>
  );
};

export default ArticlePageDetail;
