import {FlexContainer} from '@/components/Flex/FlexContainer';
import {FlexItem} from '@/components/Flex/FlexItem';
import {HeartIcon, MapPinIcon, ShoppingBagIcon, TruckIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/icons/logo.svg';
import {RedCounter} from '@/components/RedCounter';


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

        <div className='ml-6 flex flex-1 gap-x-3'>
          <input type='text' className='w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm' />
        </div>

        <FlexContainer classNames={'ml-2'}>
          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <TruckIcon className='h-5 w-5 text-gray-500' />
            <span className='text-sm font-medium'>Заказы</span>
          </div>

          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <HeartIcon className='h-5 w-5 text-gray-500' />
            <span className='text-sm font-medium'>Избранное</span>
          </div>

          <div className='flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100'>
            <div className='relative'>
              <RedCounter num={3}>
                <ShoppingBagIcon className='h-5 w-5 text-gray-500' />
              </RedCounter>

            </div>
            <span className='text-sm font-medium'>Корзина</span>
          </div>

          <div className='ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100'>
            <span className='text-sm font-medium'>Войти</span>
          </div>
        </FlexContainer>
      </FlexContainer>

      <div className='mt-4 flex items-center justify-between'>
        <div className='flex gap-x-2'>


          <MapPinIcon className='h-5 w-5 text-gray-500' />

          <span className='text-sm font-medium'>Архангельск</span>
        </div>

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
      </div>
    </div>
  </header>;
};
