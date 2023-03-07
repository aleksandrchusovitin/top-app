import clsx from 'clsx';
import { FC } from 'react';
import { TagColor, TagSize } from './Tag.enums';

import { ITagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag: FC<ITagProps> = (props) => {
  const {
    size = TagSize.m,
    color = TagColor.transparent,
    children,
    href,
    ...otherProps
  } = props;

  return (
    <div
      className={clsx(styles.tag, styles[size], styles[color])}
      {...otherProps}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
