import { AppContext } from '@/context/app.context';
import { FC, useContext } from 'react';
import SecondLevelMenuItem from './components/SecondLevelMenuItem/SecondLevelMenuItem';

import { ISecondLevelMenuProps } from './SecondLevelMenu.props';
import styles from './SecondLevelMenu.module.css';

export const SecondLevelMenu: FC<ISecondLevelMenuProps> = (props) => {
  const { firstLevelMenuItem } = props;

  const { menu } = useContext(AppContext);

  return (
    <ul className={styles.root}>
      {menu.map((menuItem) => {
        return (
          <SecondLevelMenuItem
            key={menuItem._id.secondCategory}
            secondLevelMenuItem={menuItem}
            firstLevelMenuItem={firstLevelMenuItem}
          />
        );
      })}
    </ul>
  );
};

export default SecondLevelMenu;
