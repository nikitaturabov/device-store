import {FlexContainer} from '@/components/Flex/FlexContainer';
import {FlexItem} from '@/components/Flex/FlexItem';
import {Title} from '@/components/Typography/Title';
import {Text} from '@/components/Typography/Text';

export const Auth = () => {
  return <FlexContainer className={'h-full'} justify={'center'}>
    <FlexItem>
      <form method={'POST'} action='/api/login'>
        <FlexContainer direction={'column'} justify={'center'} alignItems={'center'} gap={4}>
          <Title.H4 align={'center'}>{'Окошечко авторизации'}</Title.H4>
          <FlexContainer direction={'row'} alignItems={'center'} justify={'between'} gap={2}>
            <Text.Small className={'w-32'}>{'Login'}</Text.Small>
            <input type={'text'} name={'username'} defaultValue={'admin'}
              className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexContainer>


          <FlexContainer direction={'row'} alignItems={'center'} justify={'between'} gap={2}>
            <Text.Small className={'w-32'}>{'Password'}</Text.Small>
            <input type={'password'} name={'password'} defaultValue={'admin'}
              className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexContainer>
          <button type={'submit'} className='ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100'>
            <span className='text-sm font-medium'>Войти</span>
          </button>
        </FlexContainer>
      </form>
    </FlexItem>
  </FlexContainer>;
};
