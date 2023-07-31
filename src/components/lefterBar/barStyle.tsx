import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

export const Title = styled.div`
  font-size: 1em;
  text-align: center;
`;
const StyleWrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.07);
  border-radius: 10px;
`;

export const Wrapper: React.FC<IWrapper> = (props) => {
  return <StyleWrapper>{props.children}</StyleWrapper>;
};
