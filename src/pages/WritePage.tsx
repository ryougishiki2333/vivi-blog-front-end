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
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";

const WritePage: React.FC = () => {
  const [id, setId] = useState("");
  const [tempId, setTempId] = useState("");
  const handleIdChange = (idClickValue: string) => {
    openCheckSave();
    setTempId(idClickValue);
  };

  const [checkSaveOpen, setCheckSaveOpen] = useState(false);
  const openCheckSave = () => {
    setCheckSaveOpen(true);
  };
  const closeCheckSave = (state: number) => {
    if (state !== 0) {
      setId(tempId);
    }
    if (state === 1) {
      // 触发保存
    }
    setTempId("");
    setCheckSaveOpen(false);
  };

  // 数据保存
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<Array<string>>([]);

  // onChange
  const handleContentChange = (value: string) => {
    setContent(value);
  };
  // editor: IDomEditor
  // editor.getHtml()

  // event: React.ChangeEvent<HTMLInputElement>
  // event.target.value
  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleTagChange = (value: Array<string>) => {
    setTag(value);
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
          />
        </RighterWrapper>
      </ContentWrapper>
      <ScrollRestoration />

      <Dialog open={checkSaveOpen} onClose={closeCheckSave}>
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
