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
    <Link
      to={to}
      className={`
        shadow-nue 
        dark:shadow-nue-black
        rounded-full 
        p-4
        cursor-pointer 
        duration-500
        hover:shadow-nue-inset
        dark:hover:shadow-nue-black-inset
        `}>
      <Icon fill={match ? COLOR.YELLOW_500 : darkTheme ? COLOR.DARK_500 : COLOR.LIGHT_500} />
    </Link>
  );
}
