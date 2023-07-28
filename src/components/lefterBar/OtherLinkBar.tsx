import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { RootState } from "src/store/store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ILink, ITag } from "src/types/dataType";

// const Title = styled.div`
//   ${barStyleTitle}
// `;
// const Wrapper = styled.div`
//   ${barStyleWrapper}
// `;

const OtherFrameBar: React.FC = () => {
  const selectGlobalText = (state: RootState) => state.globalText.value;
  const globalText = useAppSelector(selectGlobalText);
  const link = globalText.usefulLink;

  const linkList = (linkItem: Array<ILink>) => {
    return linkItem.map((item) => (
      <ListItem key={item.name} disableGutters>
        <a href={item.url}>
          <ListItemText primary={item.name} />
        </a>
      </ListItem>
    ));
  };
  return (
    <Wrapper>
      <SvgTitleCompo text="Other" />
      <List>{linkList(link)}</List>
    </Wrapper>
  );
};

export default OtherFrameBar;
