import './globals.css';
import { Header } from '@/app/layout/components/Header';
import { Body } from '@/app/layout/components/Body';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Home page',
  description: 'Gooddevice29 техника apple в Архангельске',
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>
      <Header />
      <Body>
        {children}
      </Body>
    </>
  );
};

export default RootLayout;
