import { FC } from 'react';
import FirstLevelMenuItem from './components/FirstLevelMenuItem/FirstLevelMenuItem';

import { IFirstLevelMenuProps } from './FirstLevelMenu.props';
import styles from './FirstLevelMenu.module.css';

export const FirstLevelMenu: FC<IFirstLevelMenuProps> = (props) => {
  const { firstLevelMenu } = props;

  return (
    <ul className={styles.root}>
      {firstLevelMenu.map((menuItem) => {
        return (
          <FirstLevelMenuItem key={menuItem.id} firstLevelMenuItem={menuItem} />
        );
      })}
    </ul>
  );
};

export default FirstLevelMenu;
