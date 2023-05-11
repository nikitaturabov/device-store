import { FunctionComponent, PropsWithChildren } from 'react';
import React, { MouseEvent } from 'react';

type TBtnTypes = 'primary' | 'secondary' | 'tertiary';
type TBtnSizes = 'large' | 'medium' | 'small';

interface IBtn {
  type?: TBtnTypes;
  size?: TBtnSizes;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
  disabled?: boolean;
}

export const Button: FunctionComponent<PropsWithChildren<IBtn>> = (props) => {
  const { onClick, size = 'medium', type = 'primary', children, className = '', disabled = false} = props;

  const sizeClasses = size === 'small' ? 'px-3 py-1 text-sm' : size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-md';
  const typeClasses = type === 'primary' ? 'bg-white-100 text-white' : type === 'secondary' ? 'bg-gray text-white' : 'bg-blue text-white';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'transition ease-in-out duration-300 hover:cursor-pointer';

  return (
    <div
      className={`${sizeClasses} ${typeClasses} ${disabledStyle} + hover:bg-opacity-75 focus:outline-none` + {className}}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
