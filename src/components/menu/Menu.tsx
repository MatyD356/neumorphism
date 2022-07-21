import Surface from '../surface/Surface';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Bookmarks } from '../../assets/icons/bookmarks.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';

interface MeunProps {
  iconColor: string;
}
export default function Menu({ iconColor }: MeunProps) {
  return (
    <div className="absolute left-0 right-0 bottom-0 ">
      <Surface classes="flex justify-around m-0 rounded-b-none">
        <Home fill={iconColor} />
        <Bookmarks fill={iconColor} />
        <Edit fill={iconColor} />
      </Surface>
    </div>
  );
}
