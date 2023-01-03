import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const ContentWrapperInner = styled.div`
  width: 100%;
  display: flex;
`;

const ContentWrapper: React.FC<IWrapper> = (props) => {
  return <ContentWrapperInner>{props.children}</ContentWrapperInner>;
};

export default ContentWrapper;
