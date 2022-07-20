import { ReactNode } from 'react';

interface SurfaceProps {
  children: ReactNode;
  classes?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Surface({ children, classes, onClick, hover }: SurfaceProps) {
  return (
    <div
      onClick={onClick ? onClick : undefined}
      className={`
      p-8
      m-8
      bg-nue
      rounded-xl
      shadow-nue
      duration-500
      transition-all
      dark:bg-black-nue 
      dark:shadow-nue-black
      ${hover ? 'hover:shadow-nue-inset' : ''}
      ${hover ? 'dark:hover:shadow-nue-black-inset' : ''}
      ${classes ? classes : ''}
    `}>
      {children}
    </div>
  );
}
