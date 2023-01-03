export type IArticle = {
    title:string
    content: string
    tag:Array<ITag>
    articleState:IArticleState
}

export type ITag = {
    name:string
    check:boolean
}

enum IArticleState {
  draft = 0,
  publish = 1,
  delete = 2,
  archive = 3,
}