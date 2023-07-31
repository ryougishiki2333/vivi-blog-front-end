import styled from "styled-components";
import { Wrapper } from "./barStyle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { RootState } from "src/store/store";
import { useAppSelector } from "../../store/hooks";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
`;

const Text = styled.div``;

const AnnounceBar: React.FC = () => {
  const selectTextReducer = (state: RootState) => state.globalText.value;
  const textReducer = useAppSelector(selectTextReducer);

  return (
    <Wrapper>
      <SvgTitleCompo icon={<VolumeUpIcon />} text="Announcement" />
      <FlexBox>
        <Text>{textReducer.billBoard}</Text>
      </FlexBox>
    </Wrapper>
  );
};

export default AnnounceBar;
