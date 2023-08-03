export type IMotherComment = {
  id:string
  content:string
  username:string
  displayName:string
  state:ICommentState
  articleId:string
  children: Array<IChildrenComment>
  updatedAt: Date
  userId:string
}

export type IChildrenComment = {
  id:string
  content:string
  username:string
  displayName:string
  state:ICommentState
  replyUserId:string
  updatedAt: Date
  userId:string
  articleId:string
}

export enum ICommentState {
  delete = 0,
  publish = 1,
}


export type IScore = {
  id: string
  score: number
  articleId: string
  userId:string
}

export type IArticle = {
  title: string;
  content: string;
  tag: Array<ITag>;
  articleState: IArticleState; 
  id: string;
  coverPicture:string;
  synopsis:string;
  createdAt:Date;
  updatedAt:Date;
};

export type ICommentUnit = {
  displayName: string;
  email: string;
  img: string;
  replyUserId: string;
  content: string;
  updatedAt: Date;
  handleNoTokenSubmit: () => void
  id: string
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

export type ITextReducer = {
  billBoard: string
  usefulLink: Array<ILink>
  otherLink: Array<ILink>
}

export type ILink = {
  name: string;
  url: string;
  img?: string
}

export type IUser = {
  token: string
  username: string
  displayName:string
  // id: string
  type: IUserType
  avatar: string
}

export enum IUserType {
  other = 0,
  visiter = 1,
  owner = 2,
}