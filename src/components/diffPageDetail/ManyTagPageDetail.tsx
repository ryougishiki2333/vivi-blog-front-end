import styled from "styled-components";
import MainLeft from "../globalContent/MainLeft";
import WelcomeWrapper from "../globalContent/Welcome";
import ManyTagZone from "../righterZone/ManyTagZone";

const MainPageDetail: React.FC = () => {
  const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
  `;
  const LefterWrapper = styled.div`
    background: #f9b3e4;
    width: 30%;
    padding: 10px;
    border: solid;
    text-align: center;
  `;
  const RighterWrapper = styled.div`
    background: #f9b3e4;
    width: 70%;
    padding: 10px;
    border: solid;
    text-align: center;
  `;

  return (
    <>
      <WelcomeWrapper />
      <ContentWrapper>
        <LefterWrapper>
          <MainLeft />
        </LefterWrapper>
        <RighterWrapper>
          <ManyTagZone></ManyTagZone>
        </RighterWrapper>
      </ContentWrapper>
    </>
  );
};

export default MainPageDetail;
