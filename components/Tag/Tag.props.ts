import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TagColor, TagSize } from './Tag.enums';

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: TagSize;
  href?: string;
  color?: TagColor;
}
