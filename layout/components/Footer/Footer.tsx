import { FC } from 'react';

import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';
import clsx from 'clsx';
import { format } from 'date-fns';

export const Footer: FC<IFooterProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <footer className={clsx(className, styles.root)} {...otherProps}>
      <p className={styles.allRights}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <a
        href='#'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.userAgreement}
      >
        Пользовательское соглашение
      </a>
      <a
        href='#'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.policy}
      >
        Политика конфиденциальности
      </a>
    </footer>
  );
};
