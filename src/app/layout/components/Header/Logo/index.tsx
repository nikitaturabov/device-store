import {FunctionComponent} from 'react';
import Image from 'next/image';
import logo from '@/icons/logo.svg';
import {FlexContainer} from '@/components/Flex/FlexContainer';

export const Logo: FunctionComponent = () => {
  return <FlexContainer justify={'between'}>
    <Image src={logo} width={28} height={28} alt={''} />
    <span className='ml-2 font-semibold text-[#252C32]'>Good Device 29</span>
  </FlexContainer>;
};
