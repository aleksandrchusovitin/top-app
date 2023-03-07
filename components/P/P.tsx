import clsx from 'clsx';
import { FC } from 'react';
import { PSize } from './P.enums';

import { IPProps } from './P.props';
import styles from './P.module.css';

export const P: FC<IPProps> = (props) => {
  const { size = PSize.m, children, ...otherProps } = props;

  return (
    <p className={clsx(styles.p, styles[size])} {...otherProps}>
      {children}
    </p>
  );
};
