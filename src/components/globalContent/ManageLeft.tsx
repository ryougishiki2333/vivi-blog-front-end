import ManageLeftButtonCompo from "../commomComponents/ManageLeftButtonCompo";

const ManageLeft: React.FC = () => {
  return (
    <>
      <ManageLeftButtonCompo
        to={"/manage/article"}
        text={"编辑文章"}
      ></ManageLeftButtonCompo>
      <ManageLeftButtonCompo
        to={"/manage/visitor"}
        text={"游客管理"}
      ></ManageLeftButtonCompo>
      <ManageLeftButtonCompo
        to={"/manage/page"}
        text={"页面管理"}
      ></ManageLeftButtonCompo>
      <ManageLeftButtonCompo
        to={"/manage/tag"}
        text={"标签管理"}
      ></ManageLeftButtonCompo>
      <ManageLeftButtonCompo
        to={"/manage/comment"}
        text={"评论管理"}
      ></ManageLeftButtonCompo>
      <ManageLeftButtonCompo
        to={"/manage/list"}
        text={"文章管理"}
      ></ManageLeftButtonCompo>
    </>
  );
};

export default ManageLeft;
