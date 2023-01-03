import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const RighterWrapperInner = styled.div`
  background: #f9b3e4;
  width: 72%;
  padding: 1px;
  border: solid;
  text-align: center;
`;

const RighterWrapper: React.FC<IWrapper> = (props) => {
  return <RighterWrapperInner>{props.children}</RighterWrapperInner>;
};

export default RighterWrapper;
