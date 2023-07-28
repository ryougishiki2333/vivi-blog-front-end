import React from "react"
import { IUserType } from './dataType'
import { SxProps, Theme } from '@mui/material/styles';

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
    sx: SxProps<Theme>
    type: IUserType
    //   other = 0,
    //   visiter = 1,
    //   owner = 2,
}

export type ITitle = {
    text: string
}

