import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import React, { useState, useEffect } from "react";
import { Input } from "@mui/material";
import ManageLeftButtonCompo from "../commomComponents/ViviButtonCompo";
import Switch from "@mui/material/Switch";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { RootState } from "../../store/store";
import { ITag } from "src/types/dataType";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const TagBox = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

interface IEditArticleZoneProp {
  id: string;
  content: string;
  title: string;
  articleTag: Array<string>;
  handleTitleChange: (title: string) => void;
  handleContentChange: (content: string) => void;
  handleTagChange: (tag: Array<string>) => void;
  postDispatch: (action: string) => void;
}

const EditArticleZone: React.FC<IEditArticleZoneProp> = (props) => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  // 关于modal开合逻辑
  const [editTagOpen, setEditTagOpen] = useState(false);

  const handleEditTag = () => {
    setEditTagOpen(!editTagOpen);
  };

  // 初始数据的逻辑
  const selectTag = (state: RootState) => state.tag.value;
  const selectArticle = (state: RootState) => state.article.value;
  const article = useAppSelector(selectArticle);
  const tag = useAppSelector(selectTag);

  const chooseArticle = (id: string) => {
    return id
      ? article.filter((item) => {
          return item.id === id;
        })
      : [];
  };

  useEffect(() => {
    if (props.id) {
      // const chooseArticle = article.filter((item) => {
      //   return item.id === props.id;
      // });
      props.handleTitleChange(chooseArticle(props.id)[0].title);
      props.handleContentChange(chooseArticle(props.id)[0].content);
      props.handleTagChange(chooseArticle(props.id)[0].tag);
    } else {
      props.handleTitleChange("");
      props.handleContentChange("");
      props.handleTagChange([]);
    }
  }, [props.id]);

  return (
    <>
      <Wrapper>
        <SvgTitleCompo text="Editing" />
        <div>文章标题</div>
        <Input
          value={props.title}
          onChange={(event) => props.handleTitleChange(event.target.value)}
          placeholder={"请输入内容..."}
        />
        <div>文章正文</div>
        <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: "1px solid #ccc" }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={props.content}
            onCreated={setEditor}
            onChange={(editor) => props.handleContentChange(editor.getHtml())}
            mode="default"
            style={{ height: "500px", overflowY: "hidden" }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>{props.content}</div>
      </Wrapper>

      <Wrapper>
        <SvgTitleCompo text="Tag" />
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={tag}
          value={[...props.articleTag]}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} />}
          onChange={(event, value) => props.handleTagChange(value)}
        />

        <ButtonBox>
          <ManageLeftButtonCompo
            onClick={handleEditTag}
            text="编辑"
            color="#000000"
          />
        </ButtonBox>
      </Wrapper>

      <Wrapper>
        <SvgTitleCompo text="Controling" />
        <ButtonBox>
          <ViviButtonCompo
            text="保存"
            color="#000000"
            onClick={() => props.postDispatch("save")}
          />
          {props.id && chooseArticle(props.id)[0].articleState === 1 && (
            <ViviButtonCompo
              text="删除"
              color="#000000"
              onClick={() => props.postDispatch("delete")}
            />
          )}
          {props.id && chooseArticle(props.id)[0].articleState === 1 && (
            <ViviButtonCompo
              text="归档"
              color="#000000"
              onClick={() => props.postDispatch("archive")}
            />
          )}
          {((props.id && chooseArticle(props.id)[0].articleState !== 1) ||
            !props.id) && (
            <ViviButtonCompo
              text="发布"
              color="#000000"
              onClick={() => props.postDispatch("publish")}
            />
          )}
        </ButtonBox>
      </Wrapper>

      <Dialog open={editTagOpen} onClose={handleEditTag}>
        <DialogTitle>修改Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>待补充</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditTag}>取消</Button>
          <Button onClick={handleEditTag}>提交</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditArticleZone;
