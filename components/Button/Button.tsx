import { FC } from 'react';
import clsx from 'clsx';
import ArrowIcon from './arrow.svg';

import { IButtonProps } from './Button.props';
import styles from './Button.module.css';
import { ButtonAppereance, ButtonArrowDirection } from './Button.enums';

export const Button: FC<IButtonProps> = (props) => {
  const {
    appereance = ButtonAppereance.primary,
    children,
    className,
    arrow = ButtonArrowDirection.none,
    ...otherProps
  } = props;

  const hasArrow = arrow !== ButtonArrowDirection.none;

  return (
    <button
      className={clsx(styles.button, className, styles[appereance])}
      {...otherProps}
    >
      {children}

      {hasArrow && <ArrowIcon className={clsx(styles.arrow, styles[arrow])}>d</ArrowIcon>}
    </button>
  );
};
