import {TColors} from '@/specs/colors';

type TProps = {
  children: string;
  className?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'right' | 'center' | 'justify';
  color?: TColors;
}

export type TTitleProps = TProps;
export type TTextProps = TProps;
