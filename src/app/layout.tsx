import './globals.css';
import { Header } from '@/app/layout/components/Header';
import { Body } from '@/app/layout/components/Body';
import { FunctionComponent, PropsWithChildren } from 'react';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Home page',
  description: 'Gooddevice29 техника apple в Архангельске'
};

const RootLayout: FunctionComponent<PropsWithChildren> = () => {
  const handleClickOne = () => {
    alert('Click on Button 1');
  };

  const handleClickTwo = () => {
    alert('Click on Button 2');
  };

  const handleClickThree = () => {
    alert('Click on Button 3');
  };

  return (
    <html lang='en'>
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
      </Body>
    </html>
  );
};

export default RootLayout;
