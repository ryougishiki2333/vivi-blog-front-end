import styled from "styled-components";
import NavigationFloator from "../components/globalFloator/NavigationFloator";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <>
      <NavigationFloator></NavigationFloator>
      <Outlet></Outlet>
    </>
  );
};

export default MainPage;
