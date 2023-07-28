import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const LefterWrapperInner = styled.div`
  width: 20%;
`;

const LefterWrapper: React.FC<IWrapper> = (props) => {
  return <LefterWrapperInner>{props.children}</LefterWrapperInner>;
};

export default LefterWrapper;
