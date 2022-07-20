import useDarkTheme from '../../hooks/useDarkTheme';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png';
import { motion, Variants } from 'framer-motion';
import { useMemo, useState } from 'react';
import Img from '../img/Img';
import Surface from '../surface/Surface';

export default function ThemeButton() {
  const [darkTheme, toggleTheme] = useDarkTheme();
  const initialTheme = useMemo(() => darkTheme, []);
  const [changeCounter, setChangeCounter] = useState(initialTheme ? 1 : 0);
  const [disable, setDisable] = useState(false);

  const rotationAngle = 180;
  const animationDuration = initialTheme && changeCounter === 1 ? 0 : 0.5;
  const animationStartAngle = 0;

  const variants: Variants = useMemo(
    () => ({
      light: { rotate: animationStartAngle + changeCounter * rotationAngle },
      dark: { rotate: rotationAngle * changeCounter }
    }),
    [changeCounter]
  );

  const handleClick = () => {
    setDisable(true);
    setChangeCounter((prev) => prev + 1);
    toggleTheme();
  };

  return (
    <Surface
      hover
      onClick={disable ? undefined : handleClick}
      classes="w-28 h-14 relative overflow-hidden">
      <motion.div
        animate={darkTheme ? 'dark' : 'light'}
        variants={variants}
        transition={{ duration: animationDuration }}
        onAnimationComplete={() => setDisable(false)}
        className={`absolute top-4 left-10 h-28 flex flex-col justify-between`}>
        <Img h={32} w={32} src={sun} />
        <Img h={32} w={32} src={moon} />
      </motion.div>
    </Surface>
  );
}
