import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PSize } from './P.enums';

export interface IPProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: PSize;
}
