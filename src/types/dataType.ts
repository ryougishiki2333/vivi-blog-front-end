export type IArticle = {
    content: string
    tag:Array<ITag>
    isPublic:boolean
    isDelete:boolean
}

export type ITag = {
    name:string
    check:boolean
}