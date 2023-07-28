import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IArticle, IArticleState } from "src/types/dataType";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

// const Title = styled.div`
//   ${barStyleTitle}
// `;
// const Wrapper = styled.div`
//   ${barStyleWrapper}
// `;

interface IEditArticleBarProp {
  handleIdChange: (id: string) => void;
}

const selectArticle = (state: RootState) => state.article.value;

const filterArticle = (article: Array<IArticle>, state: IArticleState) => {
  return article.filter((item) => {
    return item.articleState === state;
  });
};

const EditArticleBar: React.FC<IEditArticleBarProp> = (props) => {
  const article = useAppSelector(selectArticle);

  const renderArticle = (article: Array<IArticle>) => {
    return article.map((item) => (
      <ListItem
        key={item.id}
        disableGutters
        secondaryAction={
          <>
            <IconButton
              onClick={() => props.handleIdChange(item.id)}
              aria-label="comment"
            >
              <EditIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText primary={item.title} />
      </ListItem>
    ));
  };

  return (
    <>
      <Wrapper>
        <Button variant="text" onClick={() => props.handleIdChange("")}>
          新建文章
        </Button>
      </Wrapper>
      <Wrapper>
        <Title>草稿箱</Title>
        <List>{renderArticle(filterArticle(article, 0))}</List>
      </Wrapper>
      <Wrapper>
        <Title>已发布列表</Title>
        <List>{renderArticle(filterArticle(article, 1))}</List>
      </Wrapper>
      <Wrapper>
        <Title>已删除列表</Title>
        <List>{renderArticle(filterArticle(article, 2))}</List>
      </Wrapper>
      <Wrapper>
        <Title>已归档列表</Title>
        <List>{renderArticle(filterArticle(article, 3))}</List>
      </Wrapper>
    </>
  );
};

export default EditArticleBar;
