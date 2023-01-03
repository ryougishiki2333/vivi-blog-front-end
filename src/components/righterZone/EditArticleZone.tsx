import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import React, { useState, useEffect } from "react";
import { Input } from "@mui/material";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const EditArticleZone: React.FC = () => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [title, setTitle] = useState("请输入文章标题");
  const [content, setContent] = useState("<p>请输入文章正文</p>");
  // // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHtml("<p>hello world</p>");
  //   }, 1500);
  // }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
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
  return (
    <Wrapper>
      <SvgTitleCompo text="Editing" />
      <div>文章标题</div>
      <Input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
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
          value={content}
          onCreated={setEditor}
          onChange={(editor) => setContent(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>{content}</div>
      <ButtonBox>
        <ViviButtonCompo text="保存" color="#000000" />
        <ViviButtonCompo text="删除" color="#000000" />
        <ViviButtonCompo text="发布" color="#000000" />
      </ButtonBox>
    </Wrapper>
  );
};

export default EditArticleZone;
