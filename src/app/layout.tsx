import './globals.css';
import {Header} from '@/app/layout/components/Header';
import {Body} from '@/app/layout/components/Body';
import React, {FunctionComponent, PropsWithChildren} from 'react';

export const metadata = {
  title: 'Home page',
  description: 'Gooddevice29 техника apple в Архангельске'
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return <>
    <Header />
    <Body>{children}</Body>
  </>;
};

export default RootLayout;
