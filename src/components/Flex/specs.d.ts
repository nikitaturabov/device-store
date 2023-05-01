export const justifyConfig = {
  between: 'justify-between',
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
  baseline: 'justify-baseline'
};

export const alignContentConfig = {
  between: 'content-between',
  center: 'content-center',
  start: 'content-start',
  end: 'content-end',
  around: 'content-around',
  evenly: 'content-evenly',
  stretch: 'content-stretch',
  baseline: 'content-baseline'
};

export const wrapConfig = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  wrapReverse: 'flex-wrap-reverse'
};

export const directionConfig = {
  column: 'flex-column',
  row: 'flex-row'
};

export const alignSelfConfig = {
  center: 'self-center',
  start: 'self-start',
  end: 'self-end',
  stretch: 'self-stretch'
};

export const justifySelfConfig = {
  center: 'items-self-center',
  start: 'items-self-start',
  end: 'items-self-end',
  stretch: 'items-self-stretch'
};

export const growConfig = {
  grow: 'flex-grow',
  grow_0: 'flex-grow-0'
};

export const shrinkConfig = {
  shrink: 'flex-shrink',
  shrink_0: 'flex-shrink-0'
};

export const gapsConfig = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
  32: 'gap-32',
  40: 'gap-40',
  48: 'gap-48',
  56: 'gap-56',
  64: 'gap-64',
  px: 'gap-px'
};

export type TFlexContainer = {
  direction?: keyof typeof directionConfig;
  classNames?: string;
  justify?: keyof typeof justifyConfig;
  alignContent?: keyof typeof alignContentConfig;
  wrap?: keyof typeof wrapConfig;
  gap?: keyof typeof gapsConfig;
}

type TFlexItem = {
  grow?: keyof typeof growConfig;
  shrink?: keyof typeof shrinkConfig;
  classNames?: string;
  alignSelf?: keyof typeof alignSelfConfig;
  justifySelf?: keyof typeof justifySelfConfig;
}
