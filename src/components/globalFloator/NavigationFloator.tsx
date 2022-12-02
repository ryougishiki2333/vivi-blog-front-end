import styled from "styled-components";
import TransparentTextButton from "../commomComponents/TransparentTextButton";
import Stack from "@mui/material/Stack";

const NavigationFloator: React.FC = () => {
  const Wrapper = styled.div`
    background: #d6aefb;
    height: 40px;
    width: 100%;
    position: sticky;
    top: 0px;
    border: solid;
  `;

  return (
    <Wrapper>
      <Stack direction="row" spacing={2}>
        <TransparentTextButton to={"/main/mainPage"} text={"Vivi"} />
        <TransparentTextButton to={"/main/articlePage"} text={"随机"} />
        <TransparentTextButton to={"/main/filterPage"} text={"目录"} />
        <TransparentTextButton to={"/main/aboutPage"} text={"打赏"} />
      </Stack>
    </Wrapper>
  );
};

export default NavigationFloator;
