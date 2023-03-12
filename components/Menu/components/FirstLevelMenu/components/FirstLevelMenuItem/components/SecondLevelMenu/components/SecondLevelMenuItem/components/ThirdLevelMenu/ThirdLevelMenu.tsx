import { FC } from 'react';
import ThirdLevelMenuItem from './components/ThirdLevelMenuItem/ThirdLevelMenuItem';

import { IThirdLevelMenuProps } from './ThirdLevelMenu.props';
import styles from './ThirdLevelMenu.module.css';

export const ThirdLevelMenu: FC<IThirdLevelMenuProps> = (props) => {
  const { pages, route } = props;

  return (
    <ul className={styles.root}>
      {pages.map((page) => {
        return (
          <ThirdLevelMenuItem
            key={page._id}
            thirdLevelMenuItem={page}
            route={route}
          />
        );
      })}
    </ul>
  );
};

export default ThirdLevelMenu;
