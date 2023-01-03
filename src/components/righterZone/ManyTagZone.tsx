import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
  height: 600px;
`;

const ManyTagZone: React.FC = () => {
  return (
    <Link to={"/main/filterPage"}>
      <Wrapper>
        <Title>标签显示组件</Title>
      </Wrapper>
    </Link>
  );
};

export default ManyTagZone;
