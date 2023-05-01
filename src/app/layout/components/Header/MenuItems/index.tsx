import {FunctionComponent} from 'react';
import Link from 'next/link';
import {Text} from '@/components/Typography/Text';

export const MenuItems: FunctionComponent = () => {
  const classes = 'p-2 cursor-pointer hover:bg-gray-100';
  const items = [
    {
      name: 'iPhones',
      url: '#'
    },
    {
      name: 'Watch',
      url: '#'
    },
    {
      name: 'Pods',
      url: '#'
    },
    {
      name: 'Приставки',
      url: '#'
    },
    {
      name: 'Процессоры',
      url: '#'
    },
    {
      name: 'Мыши',
      url: '#'
    },
    {
      name: 'Клавиатуры',
      url: '#'
    },
    {
      name: 'Аксессуары',
      url: '#'
    }
  ];

  return <>{items.map(item =>
    <Link href={item.url}>
      <Text.Small weight={'medium'} classNames={classes}>
        {item.name}
      </Text.Small>
    </Link>
  )}</>;
};
