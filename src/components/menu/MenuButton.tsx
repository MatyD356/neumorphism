import { FC, SVGProps } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { COLOR } from '../../constants/colors';

interface MenuButtonProps {
  darkTheme: boolean | null;
  to: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export default function MenuButton({ Icon, to, darkTheme }: MenuButtonProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to}>
      <div
        className={`
        shadow-nue border-2 
        ${match ? 'border-yellow-500' : 'border-gray-400'} 
        border-opacity-0 
        hover:border-opacity-0
        dark:shadow-nue-black
        rounded-full 
        p-2
        my-2 
        cursor-pointer 
        duration-500
        hover:shadow-nue-inset
        dark:hover:shadow-nue-black-inset
        `}>
        <Icon fill={match ? COLOR.YELLOW_500 : darkTheme ? COLOR.DARK_500 : COLOR.LIGHT_500} />
      </div>
    </Link>
  );
}
