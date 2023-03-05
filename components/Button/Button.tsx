import { FC } from 'react';
import clsx from 'clsx';

import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import { ButtonAppereance } from './Button.enums';

export const Button: FC<IButtonProps> = (props) => {
  const {
    appereance = ButtonAppereance.primary,
    children,
    className,
    ...otherProps
  } = props;

  return (
    <button
      className={clsx(styles.button, className, styles[appereance])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
