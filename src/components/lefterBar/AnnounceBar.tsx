import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { RootState } from "src/store/store";
import { useAppSelector } from "../../store/hooks";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnnounceBar: React.FC = () => {
  const selectTextReducer = (state: RootState) => state.globalText.value;
  const textReducer = useAppSelector(selectTextReducer);

  return (
    <Wrapper>
      <SvgTitleCompo text="Board" />
      <FlexBox>
        <VolumeUpIcon />
        <Title>{textReducer.billBoard}</Title>
      </FlexBox>
    </Wrapper>
  );
};

export default AnnounceBar;
