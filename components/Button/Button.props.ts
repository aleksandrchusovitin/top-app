import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ButtonAppereance } from './Button.enums';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appereance?: ButtonAppereance;
}
