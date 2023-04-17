import {TColors} from '@/specs/colors';

type TProps = {
  children: string;
  classNames?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'right' | 'center' | 'justify';
  color?: TColors;
}

export type TTitleProps = TProps;
export type TTextProps = TProps;
