export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

interface ITopPageAdvantage {
  title: string;
  description: string;
  _id: string;
}

interface IHhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

interface IBlog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

interface ISravnikurs {
  metaTitle: string;
  metaDescription: string;
  qas: Array<unknown>;
  _id: string;
}

interface ILearningclub {
  metaTitle: string;
  metaDescription: string;
  qas: Array<unknown>;
  _id: string;
}

export interface ITopPageModel {
  _id: string;
  tags: Array<string>;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Array<ITopPageAdvantage>;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: IHhData;
  qas: Array<unknown>;
  addresses: Array<unknown>;
  categoryOn: string;
  blog: IBlog;
  sravnikus: ISravnikurs;
  learningclub: ILearningclub;
}
