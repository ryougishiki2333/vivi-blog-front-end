import styled from "styled-components";
import { Outlet } from "react-router-dom";

const ToolbarContainer: React.FC = () => {
  const Wrapper = styled.div`
    background: #f9b3e4;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Outlet></Outlet>
    </Wrapper>
  );
};

export default ToolbarContainer;
