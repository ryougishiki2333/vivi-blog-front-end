import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { RootState } from "src/store/store";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ITag } from "src/types/dataType";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const ClassificationBar: React.FC = () => {
  const selectTag = (state: RootState) => state.tag.value;
  const tag = useAppSelector(selectTag);

  const tagList = (tagItem: Array<ITag>) => {
    return tagItem.map((item) => (
      <Link key={item.id} to={"/filterPage" + item.name}>
        <ListItem disableGutters>
          <ListItemText primary={item.name} />
        </ListItem>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Title>分类信息</Title>
      <List>{tagList(tag)}</List>
    </Wrapper>
  );
};

export default ClassificationBar;
