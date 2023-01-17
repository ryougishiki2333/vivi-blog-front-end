import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { RootState } from "src/store/store";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ITag } from "src/types/dataType";
import { useLocation, useNavigate } from "react-router-dom";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const ClassificationBar: React.FC = () => {
  const navigate = useNavigate();

  const selectTag = (state: RootState) => state.tag.value;
  const tag = useAppSelector(selectTag);

  const tagList = (tagItem: Array<ITag>) => {
    return tagItem.map((item) => (
      <ListItem
        key={item.id}
        disableGutters
        onClick={() => {
          navigate("/main/filterPage", { state: { name: `${item.name}` } });
        }}
      >
        <ListItemText primary={item.name} />
      </ListItem>
    ));
  };

  return (
    <Wrapper>
      <SvgTitleCompo text="Classify" />
      <List>{tagList(tag)}</List>
    </Wrapper>
  );
};

export default ClassificationBar;
