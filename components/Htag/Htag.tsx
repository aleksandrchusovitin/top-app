import { FC } from 'react';
import clsx from 'clsx';

import { IHtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag: FC<IHtagProps> = (props) => {
  const { level, children } = props;

  const Heading = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Heading className={clsx(styles.h, styles[`h${level}`])}>
      {children}
    </Heading>
  );
};
