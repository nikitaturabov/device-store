import { FunctionComponent, PropsWithChildren } from 'react';
import React from 'react';

interface IBtn {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';
  onclick?: () => void;
  classes?: string;
  disabled?: boolean;
}

export const Button: FunctionComponent<PropsWithChildren<IBtn>> = (props) => {
  const {
    onclick,
    size = 'medium',
    variant = 'primary',
    children,
    ...rest
  } = props;

  return <button className={`btn ${variant} ${size} (disabled ? 'disabled' : '')`} onClick={onclick} {...rest}>
    {children}
  </button>;
};
