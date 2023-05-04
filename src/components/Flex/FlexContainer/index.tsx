import {FunctionComponent, PropsWithChildren} from 'react';
import cn from 'classnames';
import {alignItemsConfig, directionConfig, gapsConfig, justifyConfig, TFlexContainer, wrapConfig} from '@/components/Flex/specs.d';

export const FlexContainer: FunctionComponent<PropsWithChildren<TFlexContainer>> = (props) => {
  const {className = '', direction, justify, alignItems, gap, wrap, children} = props;

  const classes = cn('flex',
    justify && justifyConfig[justify],
    alignItems && alignItemsConfig[alignItems],
    wrap && wrapConfig[wrap],
    direction && directionConfig[direction],
    className && className,
    gap && gapsConfig[gap]
  );

  return <div
    className={classes}
  >
    {children}
  </div>;
};
