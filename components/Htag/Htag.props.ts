import { DetailedHTMLProps, HTMLAttributes } from 'react';

type IHTagLevel = 1 | 2 | 3;

export interface IHtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level: IHTagLevel;
  children: React.ReactNode;
}
