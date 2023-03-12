import clsx from 'clsx';
import { FC } from 'react';

import { IThirdLevelMenuItemProps } from './ThirdLevelMenuItem.props';
import styles from './ThirdLevelMenuItem.module.css';

export const ThirdLevelMenuItem: FC<IThirdLevelMenuItemProps> = (props) => {
  const { thirdLevelMenuItem, route } = props;

  const menuItemLink = `/${route}/${thirdLevelMenuItem.alias}`;
  const isMenuItemActive = false;

  const title = thirdLevelMenuItem.category;

  return (
    <li className={styles.menuItem}>
      <a
        className={clsx(styles.menuItemLink, {
          [styles.menuItemLinkActive]: isMenuItemActive,
        })}
        href={menuItemLink}
      >
        {title}
      </a>
    </li>
  );
};

export default ThirdLevelMenuItem;
