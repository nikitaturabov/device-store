import {FunctionComponent, PropsWithChildren} from 'react';

type TFlexContainer = {
  grow: 'grow' | 'grow-0';
  shrink: 'shrink' | 'shrink-0';
  direction: 'column' | 'row';
  classNames: string;
}

export const FlexContainer: FunctionComponent<PropsWithChildren<TFlexContainer>> = (props) => {
  const {direction = 'row', grow = 'grow', shrink = 'shrink'} = props;
  
  return <div className={`flex flex-${direction} basis-full ${shrink} ${grow}`}></div>;
};
