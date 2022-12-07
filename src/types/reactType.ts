import React from "react"

export type IWrapper = {
    children: React.ReactNode
}

export type INavButton = {
    to: string
    text: string
}

export type IAvatar = {
    img: string
    text: string
    sx: any
}