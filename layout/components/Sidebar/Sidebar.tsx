import { FC } from 'react';

import { ISidebarProps } from './Sidebar.props';
// import styles from './Sidebar.module.css';

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { ...otherProps } = props;

  return <aside {...otherProps}>Sidebar</aside>;
};
