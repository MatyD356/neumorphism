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
        <div className="shadow-nue border-2 border-yellow-500 border-opacity-50 dark:shadow-nue-black rounded-full p-4">
          <Home fill={'#EAB308'} />
        </div>
        <div className="shadow-nue dark:shadow-nue-black rounded-full p-4">
          <Bookmarks fill={iconColor} />
        </div>
        <div className="shadow-nue dark:shadow-nue-black rounded-full p-4">
          <Edit fill={iconColor} />
        </div>
      </Surface>
    </div>
  );
}
