import {FlexContainer} from '@/components/Flex/FlexContainer';
import {HeartIcon, ShoppingBagIcon, TruckIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/icons/logo.svg';


export const Header = (): JSX.Element => {
  return <header className='bg-white'>
    <div className='border py-3 px-6'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <Image src={logo} width={28} height={28} alt={''} />
          <span className='ml-2 font-semibold text-[#252C32]'>Good Device 29</span>
        </div>

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
              <ShoppingBagIcon className='h-5 w-5 text-gray-500' />
              <span
                className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white'>3</span>
            </div>
            <span className='text-sm font-medium'>Корзина</span>
          </div>

          <div className='ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100'>
            <span className='text-sm font-medium'>Войти</span>
          </div>
        </FlexContainer>
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <div className='flex gap-x-2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-500' viewBox='0 0 20 20'
            fill='currentColor'>
            <path fill-rule='evenodd'
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clip-rule='evenodd' />
          </svg>
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
