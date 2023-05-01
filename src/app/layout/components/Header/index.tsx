import {FlexContainer} from '@/components/Flex/FlexContainer';
import {FlexItem} from '@/components/Flex/FlexItem';
import {HeartIcon, MapPinIcon, ShoppingBagIcon, TruckIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/icons/logo.svg';
import {RedCounter} from '@/components/RedCounter';
import {Text} from '@/components/Typography/Text';


export const Header = (): JSX.Element => {
  return <header className='bg-white'>
    <div className='border py-3 px-6'>
      <FlexContainer justify={'between'}>
        <FlexItem justifySelf={'center'}>
          <FlexContainer justify={'between'}>
            <Image src={logo} width={28} height={28} alt={''} />
            <span className='ml-2 font-semibold text-[#252C32]'>Good Device 29</span>
          </FlexContainer>
        </FlexItem>

        <FlexItem grow={'grow'} classNames={'ml-6'}>
          <input type='text' className='w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm' />
        </FlexItem>

        <FlexContainer classNames={'ml-2'}>
          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <TruckIcon className='h-5 w-5 text-gray-500' />
            <Text.Small weight={'medium'}>
              Заказы
            </Text.Small>
          </div>

          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <HeartIcon className='h-5 w-5 text-gray-500' />
            <Text.Small weight={'medium'}>
              Избранное
            </Text.Small>
          </div>

          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <RedCounter num={3}>
              <ShoppingBagIcon className='h-5 w-5 text-gray-500' />
            </RedCounter>
            <Text.Small weight={'medium'}>
              Корзина
            </Text.Small>
          </div>

          <div className='ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100'>
            <span className='text-sm font-medium'>Войти</span>
          </div>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer classNames={'mt-4'} alignContent={'center'} justify={'between'}>
        <FlexItem>
          <FlexContainer classNames={'mt-4'} alignContent={'center'} justify={'between'} gap={2}>
            <MapPinIcon className='h-5 w-5 text-gray-500' />
            <span className='text-sm font-medium'>Архангельск</span>
          </FlexContainer>
        </FlexItem>

        <FlexItem>
          <FlexContainer gap={8}>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>iPhones</span>
            <span
              className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Watch</span>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Pods</span>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Приставки</span>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Процессоры</span>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Мыши</span>
            <span className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Клавиатуры</span>
            <span
              className='cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100'>Аксессуары</span>
          </FlexContainer>
        </FlexItem>
      </FlexContainer>

    </div>
  </header>;
};
