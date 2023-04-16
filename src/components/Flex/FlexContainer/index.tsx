import {FunctionComponent, PropsWithChildren} from 'react';
import cn from 'classnames';

type TFlexContainer = {
  direction?: 'column' | 'row';
  classNames?: string;
  justify?: 'between' | 'center' | 'start' | 'end' | 'around' | 'evenly' | 'stretch' | 'baseline';
  alignContent?: 'between' | 'center' | 'start' | 'end' | 'around' | 'evenly' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: number;
}

export const FlexContainer: FunctionComponent<PropsWithChildren<TFlexContainer>> = (props) => {
  const {classNames, direction, justify, alignContent, wrap, gap, children} = props;

  return <div
    className={cn('flex', wrap && `flex-${wrap}`,
      direction && `flex-${direction}`,
      justify && `justify-${justify}`,
      alignContent && `content-${alignContent}`,
      gap && `gap-x-${gap}`,
      classNames || '')}
  >
    {children}
  </div>;
};
