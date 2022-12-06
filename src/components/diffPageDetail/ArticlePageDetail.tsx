import ArticleLeft from "../globalContent/ArticleLeft";
import ArticleZone from "../righterZone/ArticleZone";
import WelcomeWrapper from "../globalContent/Welcome";
import ContentWrapper from "../globalWrapper/ContentWrapper";
import LefterWrapper from "../globalWrapper/LefterWrapper";
import RighterWrapper from "../globalWrapper/RighterWrapper";
import ShareZone from "../righterZone/ShareZone";
import ScoreZone from "../righterZone/ScoreZone";
import ReplyZone from "../righterZone/ReplyZone";
import CommentZone from "../righterZone/CommentZone";

const ArticlePageDetail: React.FC = () => {
  return (
    <>
      <WelcomeWrapper />
      <ContentWrapper>
        <LefterWrapper>
          <ArticleLeft />
        </LefterWrapper>
        <RighterWrapper>
          <ArticleZone></ArticleZone>
          <ScoreZone></ScoreZone>
          <ShareZone></ShareZone>
          <CommentZone></CommentZone>
          <ReplyZone></ReplyZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default ArticlePageDetail;
