import {FunctionComponent, PropsWithChildren} from 'react';

type TFlexItem = {
  grow: 'grow' | 'grow-0';
  shrink: 'shrink' | 'shrink-0';
  classNames?: string;
  alignSelf: 'center' | 'start' | 'end' | 'stretch';
  justifySelf: 'center' | 'start' | 'end' | 'stretch';
}

export const FlexItem: FunctionComponent<PropsWithChildren<TFlexItem>> = (props) => {
  const {alignSelf = 'center', justifySelf = 'center', grow, shrink, classNames, children} = props;

  return <div className={`self-${alignSelf} items-${justifySelf} ${grow} ${shrink} ${classNames}`}>{children}</div>;
};
