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
  const {classNames = '', direction, justify, alignContent, wrap, gap, children} = props;

  return <div
    className={cn('flex', {
      [`flex-${wrap}`]: Boolean(wrap),
      [`flex-${direction}`]: Boolean(direction),
      [`justify-${justify}`]: Boolean(justify),
      [`content-${alignContent}`]: Boolean(alignContent),
      [`gap-x-${gap}`]: Boolean(gap),
      [classNames]: Boolean(classNames)
    })}
  >
    {children}
  </div>;
};
