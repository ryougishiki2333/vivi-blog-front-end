import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { RootState } from "src/store/store";
import { useAppSelector } from "../../store/hooks";

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
      <FlexBox>
        <VolumeUpIcon />
        <Title>{textReducer.billboard}</Title>
      </FlexBox>
    </Wrapper>
  );
};

export default AnnounceBar;
