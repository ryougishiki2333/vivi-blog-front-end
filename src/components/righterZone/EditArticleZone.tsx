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
import { RootState } from "../../store/store";
import { IChangeState, ITag } from "src/types/dataType";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

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

const TagFilterBox = styled.div`
  display: flex;
  align-items: center;
`;

interface IEditArticleZoneProp {
  id: number;
  content: string;
  title: string;
  articleTag: Array<ITag>;
  handleTitleChange: (title: string) => void;
  handleContentChange: (content: string) => void;
  handleTagChange: (tag: Array<ITag>) => void;
  postDispatch: (action: string, isChangeArticle: boolean) => void;
}

const EditArticleZone: React.FC<IEditArticleZoneProp> = (props) => {
  // 上传参数
  const uploadProp: UploadProps = {
    name: "file",
    action: "http://127.0.0.1:4000/api/upload",
    className: "avatar-uploader",
    showUploadList: false,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzU2NzExMDAsImV4cCI6MTY3NTc1NzUwMH0.pM7bMedL16CoAtFsdYUj9tNxjzSzxH_T2WTXagrmYt0",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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

  const chooseArticle = (id: number) => {
    return id
      ? article.filter((item) => {
          return item.id === id;
        })
      : [];
  };

  useEffect(() => {
    if (props.id) {
      props.handleTitleChange(chooseArticle(props.id)[0].title);
      props.handleContentChange(chooseArticle(props.id)[0].content);
      props.handleTagChange(chooseArticle(props.id)[0].tag);
    } else {
      props.handleTitleChange("");
      props.handleContentChange("");
      props.handleTagChange([]);
    }
  }, [props.id]);

  // 编辑tag界面
  const tagListFilter = () => {
    return tag.map((item) => (
      <TagFilterBox key={item.id}>
        <DialogContentText>{item.name}</DialogContentText>
        <Button>修改</Button>
        <Button>删除</Button>
      </TagFilterBox>
    ));
  };

  return (
    <>
      <Wrapper>
        <SvgTitleCompo text="Editing" />
        <div>文章id</div>
        <div>{props.id}</div>
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
          getOptionLabel={(option) => option.name}
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
            onClick={() => props.postDispatch("save", false)}
          />
          {props.id && chooseArticle(props.id)[0].articleState === 1 && (
            <ViviButtonCompo
              text="删除"
              color="#000000"
              onClick={() => props.postDispatch("delete", false)}
            />
          )}
          {props.id && chooseArticle(props.id)[0].articleState === 1 && (
            <ViviButtonCompo
              text="归档"
              color="#000000"
              onClick={() => props.postDispatch("archive", false)}
            />
          )}
          {((props.id && chooseArticle(props.id)[0].articleState !== 1) ||
            !props.id) && (
            <ViviButtonCompo
              text="发布"
              color="#000000"
              onClick={() => props.postDispatch("publish", false)}
            />
          )}
        </ButtonBox>
        <Upload {...uploadProp}>
          {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
        </Upload>
      </Wrapper>

      <Dialog open={editTagOpen} onClose={handleEditTag}>
        <DialogTitle>修改Tag</DialogTitle>
        <DialogContent>{tagListFilter()}</DialogContent>
        <DialogActions>
          <Button onClick={handleEditTag}>取消</Button>
          <Button onClick={handleEditTag}>提交</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditArticleZone;
