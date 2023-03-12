interface IId {
  secondCategory: string;
}

interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: IId;
  pages: Array<IPageItem>;
}
