import {FunctionComponent, PropsWithChildren} from 'react';

type TFlexContainer = {
  direction: 'column' | 'row';
  classNames?: string;
  justify: 'between' | 'center' | 'start' | 'end' | 'around' | 'evenly' | 'stretch' | 'baseline';
  alignContent: 'between' | 'center' | 'start' | 'end' | 'around' | 'evenly' | 'stretch' | 'baseline';
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap: number;
}

export const FlexContainer: FunctionComponent<PropsWithChildren<TFlexContainer>> = (props) => {
  const {
    classNames,
    direction = 'row',
    justify = 'center',
    alignContent = 'center',
    wrap = 'wrap',
    gap = 2,
    children
  } = props;

  return <div
    className={`flex 
      flex-${wrap}
      flex-${direction}
      basis-full
      justify-${justify} 
      content-${alignContent} 
      gap-${gap} 
      ${classNames}`}
  >
    {children}
  </div>;
};
