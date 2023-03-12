import { withLayout } from '@/layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FC } from 'react';
import axios from 'axios';
import { IMenuItem } from '@/interfaces/menu.interface';
import { ITopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { IProductModel } from '@/interfaces/product.interface';

const FIRST_CATEGORY = 0;
const PRODUCTS_LIMIT = 10;

const Course: FC<ICourseProps> = (props) => {
  const { products } = props;

  return <>{products && products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const menuItemsUrl = new URL(
    '/api/top-page/find',
    process.env.NEXT_PUBLIC_DOMAIN
  );
  const { data: menu } = await axios.post<Array<IMenuItem>>(menuItemsUrl.href, {
    firstCategory: FIRST_CATEGORY,
  });

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const menuItemsUrl = new URL(
    '/api/top-page/find',
    process.env.NEXT_PUBLIC_DOMAIN
  );
  const { data: menu } = await axios.post<Array<IMenuItem>>(menuItemsUrl.href, {
    firstCategory: FIRST_CATEGORY,
  });

  const topPageUrl = new URL(
    `/api/top-page/byAlias/${params.alias}`,
    process.env.NEXT_PUBLIC_DOMAIN
  );
  const { data: page } = await axios.get<ITopPageModel>(topPageUrl.href);

  const productsUrl = new URL(
    '/api/product/find',
    process.env.NEXT_PUBLIC_DOMAIN
  );
  const { data: products } = await axios.post<Array<IProductModel>>(
    productsUrl.href,
    {
      category: page.category,
      limit: PRODUCTS_LIMIT,
    }
  );

  return {
    props: {
      menu,
      firstCategory: FIRST_CATEGORY,
      page,
      products,
    },
  };
};

interface ICourseProps extends JSX.IntrinsicAttributes {
  menu: Array<IMenuItem>;
  firstCategory: number;
  page: ITopPageModel;
  products: Array<IProductModel>;
}
