import { ItemRoute } from '@/enums/ItemRoute.enum';
import { IPageItem } from '@/interfaces/menu.interface';

export interface IThirdLevelMenuItemProps {
  thirdLevelMenuItem: IPageItem;
  route: ItemRoute;
}
