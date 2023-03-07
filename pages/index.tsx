import { Button, Htag, P } from '@/components';
import {
  ButtonAppereance,
  ButtonArrowDirection,
} from '@/components/Button/Button.enums';
import { PSize } from '@/components/P/P.enums';

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
    </>
  );
}
