import './globals.css';
import {Header} from '@/app/layout/components/Header';
import {Body} from '@/app/layout/components/Body';
import {FunctionComponent, PropsWithChildren} from 'react';

export const metadata = {
  title: 'Home page',
  description: 'Gooddevice29 техника apple в Архангельске'
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <html lang='en'>
      <Header />
      <Body>{children}</Body>
    </html>
  );
};

export default RootLayout;
