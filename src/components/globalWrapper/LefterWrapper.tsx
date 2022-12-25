import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const LefterWrapper: React.FC<IWrapper> = (props) => {
  const LefterWrapper = styled.div`
    background: #f9b3e4;
    width: 28%;
    padding: 1px;
    border: solid;
    text-align: center;
  `;

  return <LefterWrapper>{props.children}</LefterWrapper>;
};

export default LefterWrapper;
