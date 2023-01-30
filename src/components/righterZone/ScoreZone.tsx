import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { Rate } from "antd";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { meanBy } from "lodash";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ScoreZone: React.FC = () => {
  const scoreItem = useAppSelector((state) => state.score.value);
  const { id } = useParams();
  const acticleScoreItem = scoreItem.filter((item) => {
    return item.articleId === id;
  });
  const scoreMean = meanBy(acticleScoreItem, "score");

  return (
    <Wrapper>
      <SvgTitleCompo text="Score" />
      <FlexDiv>
        <Rate disabled defaultValue={scoreMean} />
        <div>{acticleScoreItem.length} scores</div>
      </FlexDiv>
    </Wrapper>
  );
};

export default ScoreZone;
