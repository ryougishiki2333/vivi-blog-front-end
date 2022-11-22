import styled from "styled-components";
import NavigationFloator from "../components/globalFloator/NavigationFloator";
import WelcomeContainer from "../components/globalContainer/WelcomeContainer";
import ToolbarContainer from "../components/globalContainer/ToolbarContainer";
import ContentContainer from "../components/globalContainer/ContentContainer";
import { Outlet } from "react-router-dom";

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
      <Outlet></Outlet>
    </>
  );
};

export default MainPage;
