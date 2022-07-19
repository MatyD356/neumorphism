import { ReactNode } from "react";

interface SurfaceProps{
  children: ReactNode
}

export default function Surface({children} : SurfaceProps){
  return (
    <div className="
      p-8
      m-8
      bg-nue
      rounded-xl
      shadow-nue
      duration-500
      transition-all
      dark:bg-black-nue 
      dark:shadow-nue-black
      hover:shadow-nue-inset
      dark:hover:shadow-nue-black-inset
    ">
        {children}
    </div>
  )
}