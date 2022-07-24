import { ReactNode } from 'react';

interface SurfaceProps {
  children: ReactNode;
  classes?: string;
  square?: boolean;
  flat?: boolean;
  hover?: boolean;
  transparent?: boolean;
  onClick?: () => void;
}

export default function Surface({
  children,
  classes,
  onClick,
  hover,
  square,
  flat,
  transparent
}: SurfaceProps) {
  return (
    <div
      onClick={onClick ? onClick : undefined}
      className={`
      ${transparent ? '' : 'bg-nue dark:bg-black-nue'} 
      ${square ? '' : 'rounded-xl'}
      ${flat ? '' : 'shadow-nue dark:shadow-nue-black'}
      ${hover ? 'hover:shadow-nue-inset' : ''}
      ${hover ? 'dark:hover:shadow-nue-black-inset' : ''}
      ${classes ? classes : ''}
      transition-all
      duration-500
    `}>
      {children}
    </div>
  );
}
