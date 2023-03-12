import { ItemRoute } from '@/enums/ItemRoute.enum';
import { TopLevelCategory } from './page.interface';

interface IId {
  secondCategory: string;
}

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: IId;
  pages: Array<IPageItem>;
  isOpened?: boolean;
}

export interface IFirstLevelMenuItem {
  route: ItemRoute;
  name: string;
  icon: React.ReactNode;
  id: TopLevelCategory;
}
