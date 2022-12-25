import styled from "styled-components";
import { IViviButton } from "../../types/reactType";
import { Link } from "react-router-dom";

const barStyleTitle = `
    font-size: 1.5em;
    text-align: center;
  `;

const barStyleWrapper = `
    background: papayawhip;
    height: 150px;
    width: 70%;
    margin: 20px;
    display: inline-block;
  `;

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const ManageLeftButtonCompo: React.FC<IViviButton> = (props) => {
  return (
    <Link to={props.to ? props.to : ""}>
      <Wrapper>
        <Title>{props.text}</Title>
      </Wrapper>
    </Link>
  );
};

export default ManageLeftButtonCompo;
