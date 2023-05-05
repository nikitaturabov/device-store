import {FunctionComponent, PropsWithChildren} from 'react';
import cn from 'classnames';
import {alignSelfConfig, growConfig, justifySelfConfig, shrinkConfig, TFlexItem} from '@/components/Flex/specs.d';

export const FlexItem: FunctionComponent<PropsWithChildren<TFlexItem>> = (props) => {
  const {alignSelf = 'center', justifySelf = 'center', grow, shrink, className = '', children} = props;

  const classes = cn('flex',
    alignSelf && alignSelfConfig?.[alignSelf],
    justifySelf && justifySelfConfig?.[justifySelf],
    className && className,
    grow && growConfig?.[grow],
    shrink && shrinkConfig?.[shrink]
  );

  return <div
    className={classes}>{children}</div>;
};
