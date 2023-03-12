import { IMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { createContext, FC, useState } from 'react';

export interface IAppContext {
  menu: Array<IMenuItem>;
  firstCategory: TopLevelCategory;
  onMenuChange?: (newMenu: Array<IMenuItem>) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider: FC<
  IAppContext & { children: React.ReactNode }
> = (props) => {
  const { menu: initialMenu, firstCategory, children } = props;
  const [menu, setMenu] = useState<Array<IMenuItem>>(initialMenu);

  const handleMenuChange = (newMenu: Array<IMenuItem>) => {
    setMenu(newMenu);
  };

  return (
    <AppContext.Provider
      value={{ menu, firstCategory, onMenuChange: handleMenuChange }}
    >
      {children}
    </AppContext.Provider>
  );
};
