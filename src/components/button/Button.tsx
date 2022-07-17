import { Children, ReactNode } from "react"

type ButtonSize = {
    sm : 16
}

interface ButtonProps {
    onClick?: () => void
    children?: ReactNode
    classes? : string
}

export default function Button({onClick, children,classes}:ButtonProps){
    return(
        <div 
            onClick={onClick}
            className={`
            flex
            p-4
            bg-nue
            dark:bg-black-nue 
            rounded-xl
            transition-all
            shadow-nue
            hover:shadow-nue-inset
            dark:shadow-nue-black
            dark:hover:shadow-nue-black-inset
            overflow-hidden
            relative
            duration-500
            ${classes? classes : ''}`}>
            {children}
        </div>
    )
}