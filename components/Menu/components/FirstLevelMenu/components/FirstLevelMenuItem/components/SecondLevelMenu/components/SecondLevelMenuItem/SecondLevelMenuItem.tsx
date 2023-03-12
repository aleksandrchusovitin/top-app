import clsx from 'clsx';
import { FC } from 'react';
import ThirdLevelMenu from './components/ThirdLevelMenu/ThirdLevelMenu';

import { ISecondLevelMenuItemProps } from './SecondLevelMenuItem.props';
import styles from './SecondLevelMenuItem.module.css';

export const SecondLevelMenuItem: FC<ISecondLevelMenuItemProps> = (props) => {
  const { secondLevelMenuItem, firstLevelMenuItem } = props;

  const title = secondLevelMenuItem._id.secondCategory;
  const isItemOpened = secondLevelMenuItem.isOpened || true;

  return (
    <li
      className={clsx(styles.menuItem, {
        [styles.menuItemOpened]: isItemOpened,
      })}
    >
      <span className={styles.menuItemTitle}>{title}</span>
      {isItemOpened && (
        <ThirdLevelMenu
          pages={secondLevelMenuItem.pages}
          route={firstLevelMenuItem.route}
        />
      )}
    </li>
  );
};

export default SecondLevelMenuItem;
