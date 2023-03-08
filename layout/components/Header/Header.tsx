import { FC } from 'react';

import { IHeaderProps } from './Header.props';
// import styles from './Footer.module.css';

export const Header: FC<IHeaderProps> = (props) => {
  const { ...otherProps } = props;

  return <header {...otherProps}>Header</header>;
};
