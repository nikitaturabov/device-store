import {FunctionComponent} from 'react';
import cn from 'classnames';
import {TTextProps, TTitleProps} from '@/specs/typography';

type TClassesArgs = Partial<TTitleProps>;
const getGeneralClasses = ({weight, align, color}: TClassesArgs) => cn('leading-none', {
  [`font-${weight}`]: weight,
  [`text-${align}`]: align,
  [`text-${color}`]: color
});
export const H1: FunctionComponent<TTitleProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <h1 className={cn('text-4xl', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</h1>;
};

export const H2: FunctionComponent<TTitleProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <h2 className={cn('text-3xl', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</h2>;
};

export const H3: FunctionComponent<TTitleProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <h3 className={cn('text-2xl', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</h3>;
};

export const H4: FunctionComponent<TTitleProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <h4 className={cn('text-xl', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</h4>;
};

export const Large: FunctionComponent<TTextProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <div className={cn('text-lg', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</div>;
};

export const Base: FunctionComponent<TTextProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <div className={cn('text-base', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</div>;
};

export const Small: FunctionComponent<TTextProps> = (props) => {
  const {weight, align, color, className, children} = props;

  return <div className={cn('text-sm', className,
    getGeneralClasses({weight, align, color})
  )}>{children}</div>;
};



