import {FunctionComponent, PropsWithChildren} from 'react';
import cn from 'classnames';

type TFlexItem = {
  grow?: 'grow' | 'grow-0';
  shrink?: 'shrink' | 'shrink-0';
  classNames?: string;
  alignSelf?: 'center' | 'start' | 'end' | 'stretch';
  justifySelf?: 'center' | 'start' | 'end' | 'stretch';
}

export const FlexItem: FunctionComponent<PropsWithChildren<TFlexItem>> = (props) => {
  const {alignSelf = 'center', justifySelf = 'center', grow, shrink, classNames, children} = props;

  return <div
    className={cn('flex', {
      [`self-${alignSelf}`]: alignSelf,
      [`items-${justifySelf}`]: justifySelf
    },
    grow && grow,
    shrink && shrink,
    classNames && classNames
    )}>{children}</div>;
};
