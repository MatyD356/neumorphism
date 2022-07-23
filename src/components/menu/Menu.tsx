import Surface from '../surface/Surface';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Bookmarks } from '../../assets/icons/bookmarks.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ROUTES } from '../../constants/routes';
import MenuButton from './MenuButton';

interface MeunProps {
  darkTheme: boolean | null;
}

export default function Menu({ darkTheme }: MeunProps) {
  return (
    <div className="absolute left-0 right-0 bottom-0 ">
      <Surface classes="flex justify-around rounded-none p-0">
        <MenuButton to={ROUTES.HOME} darkTheme={darkTheme} Icon={Home} />
        <MenuButton to={ROUTES.BOOKMARKS} darkTheme={darkTheme} Icon={Bookmarks} />
        <MenuButton to={ROUTES.WRITE} darkTheme={darkTheme} Icon={Edit} />
      </Surface>
    </div>
  );
}
