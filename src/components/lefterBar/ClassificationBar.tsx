import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { RootState } from "src/store/store";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ITag } from "src/types/dataType";
import { useLocation, useNavigate } from "react-router-dom";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const ListNameWrapper = styled.div`
  font-weight: 500;
  font-size: 0.9em;
  color: #4c4948;
  text-align: left;
  margin-left: 25px;
  cursor: pointer;
`;

const ListName: React.FC<{ name: string }> = (props) => {
  return <ListNameWrapper>{props.name}</ListNameWrapper>;
};

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
          navigate("/filterPage", { state: { name: `${item.name}` } });
        }}
      >
        <a>
          <ListItemText
            // sx={{ display: "flex", justifyContent: "space-between" }}
            primary={<ListName name={item.name} />}
            // secondary={item.name}
          />
        </a>
      </ListItem>
    ));
  };

  return (
    <Wrapper>
      <SvgTitleCompo text="Tag" size={1} icon={<DensityMediumIcon />} />
      <List>{tagList(tag)}</List>
    </Wrapper>
  );
};

export default ClassificationBar;
