import { Button, Htag, P } from '@/components';
import {
  ButtonAppereance,
  ButtonArrowDirection,
} from '@/components/Button/Button.enums';
import { PSize } from '@/components/P/P.enums';
import { Tag } from '@/components/Tag/Tag';
import { TagColor } from '@/components/Tag/Tag.enums';

export default function Home() {
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
    </>
  );
}
