import { FlexContainer } from '@/components/Flex/FlexContainer';
import { FlexItem } from '@/components/Flex/FlexItem';
import { Title } from '@/components/Typography/Title';
import { Text } from '@/components/Typography/Text';
import { Button } from '@/components/Button';
import React from 'react';

export const Auth = () => {

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    alert('click');
  };

  return (
    <FlexContainer className={'h-full'} justify={'center'}>
      <FlexItem>
        <form method={'POST'} action='/api/login'>
          <FlexContainer
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            gap={4}
          >
            <Title.H4 align={'center'}>{'Окошечко авторизации'}</Title.H4>
            <FlexContainer
              direction={'row'}
              alignItems={'center'}
              justify={'between'}
              gap={2}
            >
              <Text.Small className={'w-32'}>{'Login'}</Text.Small>
              <input
                type={'text'}
                name={'username'}
                defaultValue={'admin'}
                className={
                  'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'
                }
              />
            </FlexContainer>

            <FlexContainer
              direction={'row'}
              alignItems={'center'}
              justify={'between'}
              gap={2}
            >
              <Text.Small className={'w-32'}>{'Password'}</Text.Small>
              <input
                type={'password'}
                name={'password'}
                defaultValue={'admin'}
                className={
                  'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'
                }
              />
            </FlexContainer>
            <button
              type={'submit'}
              className='ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100'
            >
              <span className='text-sm font-medium'>Войти</span>
            </button>
            <Button type='primary' size='small' onClick={handleClick}>
              Click
            </Button>
            <Button type='secondary' size='medium' onClick={handleClick}>
              Click
            </Button>
            <Button type='tertiary' size='large' onClick={handleClick}>
              Click
            </Button>
          </FlexContainer>
        </form>
      </FlexItem>
    </FlexContainer>
  );
};
