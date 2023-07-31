import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { RootState } from "src/store/store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ILink, ITag } from "src/types/dataType";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ListNameWrapper = styled.div`
  font-weight: 500;
  font-size: 0.9em;
  color: #4c4948;
  text-align: left;
  margin-left: 25px;
`;

const ListName: React.FC<{ name: string }> = (props) => {
  return <ListNameWrapper>{props.name}</ListNameWrapper>;
};

const OtherLinkBar: React.FC = () => {
  const selectGlobalText = (state: RootState) => state.globalText.value;
  const globalText = useAppSelector(selectGlobalText);
  const link = globalText.usefulLink;

  const linkList = (linkItem: Array<ILink>) => {
    return linkItem.map((item) => (
      <ListItem key={item.name} disableGutters>
        <a href={item.url}>
          <ListItemText primary={<ListName name={item.name} />} />
        </a>
      </ListItem>
    ));
  };
  return (
    <Wrapper>
      <SvgTitleCompo text="Other" icon={<FavoriteIcon />} />
      <List>{linkList(link)}</List>
    </Wrapper>
  );
};

export default OtherLinkBar;
