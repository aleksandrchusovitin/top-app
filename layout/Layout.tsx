import { FC } from 'react';
import { Footer, Header, Sidebar } from './components';

import { ILayoutProps } from './Layoutprops';
import styles from './Layout.module.css';

const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends JSX.IntrinsicAttributes>(
  Component: FC<T>
) => {
  return (props: T): React.ReactNode => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
