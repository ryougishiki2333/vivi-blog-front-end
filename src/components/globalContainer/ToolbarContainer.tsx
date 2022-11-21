import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "router/LefterBarConfig";

const router = createBrowserRouter(route);

const ToolbarContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: #f9b3e4;
    height: 200px;
    width: 100%;
  `;

  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
};

export default ToolbarContainer;
