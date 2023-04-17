import {FunctionComponent, PropsWithChildren} from 'react';

type TProps = {
  num: number;
}
export const RedCounter: FunctionComponent<PropsWithChildren<TProps>> = (props) => {
  const {num, children} = props;
  return <div className={'relative'}>
    <div
      className={'absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white'}>
      {num}
    </div>
    {children}
  </div>;
};
