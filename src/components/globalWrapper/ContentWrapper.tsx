import styled from "styled-components";
import { IWrapper } from "../../types/reactType";

const ContentWrapper: React.FC<IWrapper> = (props) => {
  const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
  `;

  return <ContentWrapper>{props.children}</ContentWrapper>;
};

export default ContentWrapper;
