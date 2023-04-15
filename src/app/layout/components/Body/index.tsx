import {FunctionComponent, PropsWithChildren} from 'react';

export const Body: FunctionComponent<PropsWithChildren> = ({children}) => {
  return <body>{children}</body>;
};
