import { FC } from 'react';

import { IMenuProps } from './Menu.props';

import { IFirstLevelMenuItem } from '@/interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import FirstLevelMenu from './components/FirstLevelMenu/FirstLevelMenu';
import { ItemRoute } from '@/enums/ItemRoute.enum';

export const Menu: FC<IMenuProps> = (props) => {
  const firstLevelMenu: Array<IFirstLevelMenuItem> = [
    {
      route: ItemRoute.courses,
      name: 'Курсы',
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: ItemRoute.services,
      name: 'Сервисы',
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services,
    },
    {
      route: ItemRoute.books,
      name: 'Книги',
      icon: <BooksIcon />,
      id: TopLevelCategory.Books,
    },
    {
      route: ItemRoute.products,
      name: 'Товары',
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products,
    },
  ];

  return (
    <div {...props}>
      <FirstLevelMenu firstLevelMenu={firstLevelMenu} />
    </div>
  );
};
