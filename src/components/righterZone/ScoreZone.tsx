import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { Rate } from "antd";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { meanBy } from "lodash";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const FlexDiv = styled.div`
  display: flex;
`;

const ScoreWrapper = styled.div`
  margin-left: 20px;
`;

const Text = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
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
      <SvgTitleCompo text="Score" icon={<AlignHorizontalLeftIcon />} />
      <FlexDiv>
        <ScoreWrapper>
          <Rate disabled defaultValue={scoreMean} />
        </ScoreWrapper>
        <Text>{acticleScoreItem.length + " scores"}</Text>
      </FlexDiv>
    </Wrapper>
  );
};

export default ScoreZone;
