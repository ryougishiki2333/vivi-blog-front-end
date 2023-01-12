export type IArticle = {
  title: string;
  content: string;
  tag: Array<ITag>;
  articleState: IArticleState;
  id: string;
  coverPicture:string
};

export type ITag = { name: string; id: string };

export enum IArticleState {
  draft = 0,
  // 只有保存、发布操作
  publish = 1,
  // 只有保存、归档、删除
  delete = 2,
  // 只有保存、发布
  archive = 3,
  // 只有保存、发布
}

export enum IChangeState {
  // 0代表下传id
  down = 0,
  // 1代表上传回调
  up = 1,
}
