import {FlexContainer} from '@/components/Flex/FlexContainer';
import {FlexItem} from '@/components/Flex/FlexItem';
import {Title} from '@/components/Typography/Title';
import {Text} from '@/components/Typography/Text';

export const Home = () => {
  return <FlexContainer className={'h-full'} justify={'center'}>
    <FlexItem>
      <form action=''>
        <FlexContainer direction={'column'} justify={'center'} alignItems={'center'} gap={4}>
          <Title.H4 align={'center'}>{'Окошечко авторизации'}</Title.H4>
          <FlexContainer direction={'row'} alignItems={'center'} justify={'between'} gap={2}>
            <Text.Small className={'w-32'}>{'Login'}</Text.Small>
            <input type={'text'} value={'admin'} className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexContainer>


          <FlexContainer direction={'row'} alignItems={'center'} justify={'between'} gap={2}>
            <Text.Small className={'w-32'}>{'Password'}</Text.Small>
            <input type={'password'} value={'admin'} className={'w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm'} />
          </FlexContainer>

        </FlexContainer>
      </form>
    </FlexItem>
  </FlexContainer>;
};
