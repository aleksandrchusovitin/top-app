import { ItemRoute } from '@/enums/ItemRoute.enum';
import { IPageItem } from '@/interfaces/menu.interface';

export interface IThirdLevelMenuProps {
  pages: Array<IPageItem>;
  route: ItemRoute;
}
