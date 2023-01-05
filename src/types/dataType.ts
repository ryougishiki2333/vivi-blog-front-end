export type IArticle = {
    title:string
    content: string
    tag:Array<ITag>
    articleState:IArticleState
    id:string
}

export type ITag = string

export enum IArticleState {
  draft = 0,
  publish = 1,
  delete = 2,
  archive = 3,
}