'use client';
import './globals.css';
import { Header } from '@/app/layout/components/Header';
import { Body } from '@/app/layout/components/Body';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Button } from '@/components/Button';

// export const metadata = {
//   title: 'Home page',
//   description: 'Gooddevice29 техника apple в Архангельске',
// };

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const handleClickOne = () => {
    alert('Click on button one!');
  };

  const handleClickTwo = () => {
    alert('Click on button one!');
  };

  const handleClickThree = () => {
    alert('Click on button one!');
  };
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>
      <Header />
      <Body>
        <Button variant='primary' size='small' onclick={handleClickOne}>
          Click
        </Button>
        <Button variant='secondary' size='medium' onclick={handleClickTwo}>
          Click
        </Button>
        <Button variant='tertiary' size='large' onclick={handleClickThree}>
          Click
        </Button>
        {children}
      </Body>
    </>
  );
};

export default RootLayout;
