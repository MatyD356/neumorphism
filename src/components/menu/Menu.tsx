import Img from '../img/Img';
import Surface from '../surface/Surface';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Bookmarks } from '../../assets/icons/bookmarks.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import useDarkTheme from '../../hooks/useDarkTheme';

export default function Menu() {
  const [darkTheme] = useDarkTheme();
  return (
    <div className="absolute left-0 right-0 bottom-0">
      <Surface classes="flex m-0 justify-around">
        <Home fill={darkTheme ? 'white' : 'black'} />
        <Bookmarks fill={darkTheme ? 'white' : 'black'} />
        <Edit fill={darkTheme ? 'white' : 'black'} />
      </Surface>
    </div>
  );
}
