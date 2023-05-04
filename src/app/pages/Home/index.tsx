import {FlexContainer} from '@/components/Flex/FlexContainer';
import {FlexItem} from '@/components/Flex/FlexItem';
import {Title} from '@/components/Typography/Title';

export const Home = () => {
  return <FlexContainer className={'h-full'} justify={'center'}>
    <FlexItem>
      <form action=''>
        <FlexContainer direction={'column'} justify={'center'} gap={2}>
          <Title.H4>{'Окошечко авторизации'}</Title.H4>
          <FlexItem>
            <input type={'text'} value={'admin'} className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexItem>
          <FlexItem>
            <input type={'password'} value={'admin'} className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexItem>
        </FlexContainer>
      </form>
    </FlexItem>
  </FlexContainer>;
};
