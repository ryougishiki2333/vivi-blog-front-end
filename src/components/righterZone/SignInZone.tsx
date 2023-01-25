import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "src/store/store";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
  height: 600px;
`;

const ManyTagZone: React.FC = () => {
  const selectUser = (state: RootState) => state.user.value;
  const user = useAppSelector(selectUser);
  return (
    <Wrapper>
      <Title>登录显示组件</Title>
    </Wrapper>
  );
};

export default ManyTagZone;
