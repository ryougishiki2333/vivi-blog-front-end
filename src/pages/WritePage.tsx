import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import ContentWrapper from "../components/globalWrapper/ContentWrapper";
import LefterWrapper from "../components/globalWrapper/LefterWrapper";
import RighterWrapper from "../components/globalWrapper/RighterWrapper";
import BackToManagePageFloator from "../components/globalFloator/BackToManagePageFloator";
import EditArticleZone from "../components/righterZone/EditArticleZone";
import EditArticleBar from "../components/lefterBar/EditArticleBar";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import { RootState } from "../store/store";
import { IChangeState } from "../types/dataType";

const WritePage: React.FC = () => {
  // 数据保存
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<Array<string>>([]);
  const [checkSaveOpen, setCheckSaveOpen] = useState(false);
  const [id, setId] = useState("");
  const [tempId, setTempId] = useState("");

  // 保存后临时token
  // const [checkIfSave, setCheckIfSave] = useState(true);

  // id改变则出现弹窗
  const handleIdChange = (idClickValue: string) => {
    setTempId(idClickValue);
    // setId(tempId);
    // if (checkIfSave) {
    //   setId(tempId);
    //   setTempId("");
    // } else {
    //   setCheckSaveOpen(true);
    // }
    setCheckSaveOpen(true);
  };

  // 保存
  const closeCheckSave = (state: number) => {
    if (state === 1) {
      postDispatch("save");
    }
    if (state !== 0) {
      setId(tempId);
    }
    setTempId("");
    setCheckSaveOpen(false);
  };

  // 控制是否回调
  const [checkIfCallback, setCheckIfCallback] = useState(false);

  // 保存后回调
  const selectArticle = (state: RootState) => state.article.value;
  const article = useAppSelector(selectArticle);
  useEffect(() => {
    checkIfCallback && setId(article[article.length - 1].id);
  }, [article.length]);

  // 改变store数据
  const dispatch = useAppDispatch();

  const postDispatch = (action: string) => {
    setCheckIfCallback(true);
    // setCheckIfSave(true);
    content &&
      dispatch({
        type: `article/${action}A`,
        payload: {
          title: title ? title : "未命名文章",
          content: content,
          tag: tag,
          id: id,
        },
      });
  };

  // onChange
  const handleContentChange = (value: string, state: IChangeState) => {
    setContent(value);
    // setCheckIfSave(!state);
  };

  const handleTitleChange = (value: string, state: IChangeState) => {
    setTitle(value);
    // setCheckIfSave(!state);
  };

  const handleTagChange = (value: Array<string>, state: IChangeState) => {
    setTag(value);
    // setCheckIfSave(!state);
  };

  return (
    <>
      <BackToManagePageFloator />
      <ContentWrapper>
        <LefterWrapper>
          <EditArticleBar handleIdChange={handleIdChange} />
        </LefterWrapper>
        <RighterWrapper>
          <EditArticleZone
            articleTag={tag}
            content={content}
            title={title}
            id={id}
            handleContentChange={handleContentChange}
            handleTagChange={handleTagChange}
            handleTitleChange={handleTitleChange}
            postDispatch={postDispatch}
          />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />

      <Dialog open={checkSaveOpen} onClose={() => closeCheckSave(0)}>
        <DialogTitle>当前文章尚未保存</DialogTitle>
        <DialogContent>
          <DialogContentText>如果不保存文章将丢失</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeCheckSave(0)}>取消</Button>
          <Button onClick={() => closeCheckSave(1)}>保存并切换</Button>
          <Button onClick={() => closeCheckSave(2)}>不进行保存并切换</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WritePage;
