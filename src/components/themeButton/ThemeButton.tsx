import useDarkTheme from "../../hooks/useDarkTheme"
import sun from '../../assets/icons/sun.png'
import moon from '../../assets/icons/moon.png'
import { motion, Variants } from "framer-motion"
import { useState } from "react"
import Button from "../button/Button"

export default function ThemeButton(){
    const [darkTheme, toggleTheme] = useDarkTheme()
    const [changeCounter, setChangeCounter] = useState(0)
    const variants: Variants = {
        light: { rotate: 0+(changeCounter*180) },
        dark: { rotate: 180*changeCounter }
    }
    const handleClick = () => {
        console.log('xsd')
        setChangeCounter((prev) => prev+1)
        toggleTheme()
    }
    return(
        <Button onClick={handleClick} classes='w-28 h-14'>
        <motion.div 
        animate={darkTheme ? 'dark' : 'light'}
        variants={variants}
        transition={{duration: 0.5}}
        className={`absolute top-3 left-10 h-28 flex flex-col justify-between` }
        >
        <div>
            <img height={32} width={32} src={sun} />
        </div>
        <div>
            <img height={32} width={32}  src={moon} />
        </div>
        </motion.div>
        </Button>
    )
}