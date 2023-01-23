import React from "react"

export type IWrapper = {
    children: React.ReactNode
}

export type IViviButton = {
    to?: string
    text: string
    fontSize?: number
    color?:string
    backgroundColor?:string
    onClick?:Function
    state?:IRouterState
}

type IRouterState = {
     name: string 
}

export type IAvatar = {
    img: string
    text: string
    sx: any
}

export type ITitle = {
    text: string
}

