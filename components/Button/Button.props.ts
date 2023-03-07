import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ButtonAppereance, ButtonArrowDirection } from './Button.enums';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appereance?: ButtonAppereance;
  arrow?: ButtonArrowDirection;
}
