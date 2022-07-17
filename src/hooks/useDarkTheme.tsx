import { useEffect, useState } from "react"

export default function useDarkTheme(): [boolean, ()=>  void] {
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleTheme = () => setDarkTheme(!darkTheme)
    useEffect(()=>{
        document.documentElement.classList.toggle('dark')
      },[darkTheme])

    return [darkTheme, toggleTheme] 
}