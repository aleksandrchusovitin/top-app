import { Button, Htag } from '@/components';
import { ButtonAppereance } from '@/components/Button/Button.enums';

export default function Home() {
  return (
    <>
      <Htag level={1}>Title</Htag>
      <Button className='123'>Button</Button>
      <Button appereance={ButtonAppereance.ghost}>Button</Button>
    </>
  );
}
