interface IProductCharacteristic {
  name: string;
  value: string;
}

interface IBlog {
  text: string;
  _id: string;
  bigImage: string;
}

interface IReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IProductModel {
  _id: string;
  categories: Array<string>;
  tags: Array<string>;
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: Array<IProductCharacteristic>;
  advantages: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: IBlog;
  companyId: string;
  clicks: number;
  reviews: Array<IReviewModel>;
  reviewCount: number;
  reviewAvg?: number;
}
