import { FunctionComponent, PropsWithChildren } from 'react';

type TBtn = {
  t: 'primary' | 'secondary' | 'tertiary' ;
  size: 'large' | 'medium' | 'small';
  handleClick: () => void;
  classes?: string;
};

export const Button: FunctionComponent<PropsWithChildren<TBtn>> = (props) => {
  const { handleClick, size, t, children, classes = ''} = props;

  return (
    <button t={t} size={size} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};
