import { FC, useContext } from 'react';
import clsx from 'clsx';

import SecondLevelMenu from './components/SecondLevelMenu/SecondLevelMenu';
import { IFirstLevelMenuItemProps } from './FirstLevelMenuItem.props';
import styles from './FirstLevelMenuItem.module.css';
import { AppContext } from '@/context/app.context';

export const FirstLevelMenuItem: FC<IFirstLevelMenuItemProps> = (props) => {
  const { firstLevelMenuItem } = props;
  const { firstCategory } = useContext(AppContext);

  const isActiveMenuItem = firstLevelMenuItem.id === firstCategory;
  const title = firstLevelMenuItem.name;

  return (
    <li>
      <a
        href={`/${firstLevelMenuItem.route}`}
        className={clsx(styles.menuItemLink, {
          [styles.menuItemLinkActive]: isActiveMenuItem,
        })}
      >
        <div className={styles.menuItem}>
          {firstLevelMenuItem.icon}
          <span className={styles.menuItemTitle}>{title}</span>
        </div>
      </a>
      {isActiveMenuItem && (
        <SecondLevelMenu firstLevelMenuItem={firstLevelMenuItem} />
      )}
    </li>
  );
};

export default FirstLevelMenuItem;
