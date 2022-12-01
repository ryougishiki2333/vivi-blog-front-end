import { Link } from "react-router-dom";
import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const InfoBar: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Link to={"/main/tagPage"}>
      <Wrapper>
        <Title>个人信息</Title>
      </Wrapper>
    </Link>
  );
};

export default InfoBar;
