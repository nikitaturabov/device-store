import { FunctionComponent, PropsWithChildren } from 'react';
import React from 'react';

type TBtnTypes = 'primary' | 'secondary' | 'tertiary';
type TBtnSizes = 'large' | 'medium' | 'small';

interface IBtn {
  type?: TBtnTypes;
  size?: TBtnSizes;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: FunctionComponent<PropsWithChildren<IBtn>> = (props) => {
  const {
    onClick,
    size = 'medium',
    type = 'primary',
    children
  } = props;

  return <div className={`btn ${type} ${size} (disabled ? 'disabled' : '')`} onClick={onClick}>
    {children}
  </div>;
};
