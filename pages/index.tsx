import { Button, Htag, P, Rating, Tag } from '@/components';
import {
  ButtonAppereance,
  ButtonArrowDirection,
} from '@/components/Button/Button.enums';
import { PSize } from '@/components/P/P.enums';
import { TagColor } from '@/components/Tag/Tag.enums';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { FC, useState } from 'react';
import axios from 'axios';
import { IMenuItem } from '@/interfaces/menu.interface';

const Home: FC<IHomeProps> = (props) => {
  const { menu } = props;

  const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Htag level={1}>Title</Htag>
      <Button className='123' arrow={ButtonArrowDirection.right}>
        Button
      </Button>
      <Button
        appereance={ButtonAppereance.ghost}
        arrow={ButtonArrowDirection.right}
      >
        Button
      </Button>

      <P size={PSize.s}>text s</P>
      <P>text m</P>
      <P size={PSize.l}>text l</P>

      <Tag>Tag Transparent</Tag>
      <Tag color={TagColor.attention}>Tag Attention</Tag>
      <Tag color={TagColor.neutral}>Tag Neutral</Tag>
      <Tag color={TagColor.success}>Tag Success</Tag>
      <Tag color={TagColor.primary}>Tag Primary</Tag>

      <Tag href='https://www.google.com/'>Tag Transparent with link</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const FIRST_CATEGORY = 0;

  const url = new URL('/api/top-page/find', process.env.NEXT_PUBLIC_DOMAIN);
  const { data: menu } = await axios.post<Array<IMenuItem>>(url.href, {
    firstCategory: FIRST_CATEGORY,
  });

  return {
    props: {
      menu,
      firstCategory: FIRST_CATEGORY,
    },
  };
};

interface IHomeProps extends JSX.IntrinsicAttributes {
  menu: Array<IMenuItem>;
  firstCategory: number;
}
