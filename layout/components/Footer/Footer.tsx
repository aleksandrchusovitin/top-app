import { FC } from 'react';

import { IFooterProps } from './Footer.props';
// import styles from './Footer.module.css';

export const Footer: FC<IFooterProps> = (props) => {
  const { ...otherProps } = props;

  return <footer {...otherProps}>Footer</footer>;
};
