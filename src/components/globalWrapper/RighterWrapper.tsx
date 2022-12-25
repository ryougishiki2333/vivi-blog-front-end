import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const RighterWrapper: React.FC<IWrapper> = (props) => {
  const RighterWrapper = styled.div`
    background: #f9b3e4;
    width: 72%;
    padding: 1px;
    border: solid;
    text-align: center;
  `;

  return <RighterWrapper>{props.children}</RighterWrapper>;
};

export default RighterWrapper;
