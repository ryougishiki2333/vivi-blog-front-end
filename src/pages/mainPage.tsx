import styled from "styled-components";
import NavigationFloator from "../components/globalFloator/NavigationFloator";
import WelcomeContainer from "../components/globalContainer/WelcomeContainer";
import ToolbarContainer from "../components/globalContainer/ToolbarContainer";
import ContentContainer from "../components/globalContainer/ContentContainer";

const MainPage: React.FC = () => {
  const FlexBox = styled.div`
    display: flex;
    width: 100%;
  `;

  const Lefter = styled.div`
    width: 30%;
  `;

  const Righter = styled.div`
    width: 70%;
  `;

  return (
    <>
      <NavigationFloator></NavigationFloator>
      <WelcomeContainer></WelcomeContainer>
      <FlexBox>
        <Lefter>
          <ToolbarContainer></ToolbarContainer>
        </Lefter>
        <Righter>
          <ContentContainer></ContentContainer>
        </Righter>
      </FlexBox>
    </>
  );
};

export default MainPage;
