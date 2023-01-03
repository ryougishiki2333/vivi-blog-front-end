import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const LefterWrapperInner = styled.div`
  background: #f9b3e4;
  width: 28%;
  padding: 1px;
  border: solid;
  text-align: center;
`;

const LefterWrapper: React.FC<IWrapper> = (props) => {
  return <LefterWrapperInner>{props.children}</LefterWrapperInner>;
};

export default LefterWrapper;
