import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const RighterWrapperInner = styled.div`
  width: 56%;
`;

const RighterWrapper: React.FC<IWrapper> = (props) => {
  return <RighterWrapperInner>{props.children}</RighterWrapperInner>;
};

export default RighterWrapper;
