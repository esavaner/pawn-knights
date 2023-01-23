import Link from 'next/link';
import React from 'react';

import { classNames } from 'utils/classNames';

import './Text.scss';

type Props<T extends React.ElementType> = React.ComponentProps<T> & {
  as?: T;
  bold?: boolean;
  variant?: 'normal' | 'light' | 'lighter';
  size?: number | string;
  children?: React.ReactNode;
  className?: string;
};

export const Text = <T extends React.ElementType = 'span'>({
  bold,
  variant,
  size,
  as,
  children,
  className,
  ...rest
}: Props<T>) => {
  const names = classNames('text', variant, { bold }, className);
  const Component = as || 'span';
  return (
    <Component className={names} style={{ fontSize: size }} {...rest}>
      {children}
    </Component>
  );
};

Text.Link = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as={Link} />;
};

Text.P = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="p" />;
};

Text.Div = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="div" />;
};

Text.H1 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h1" />;
};

Text.H2 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h2" />;
};

Text.H3 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h3" />;
};

Text.H4 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h4" />;
};

Text.H5 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h5" />;
};

Text.H6 = <T extends React.ElementType>(props: Props<T>) => {
  return <Text {...props} as="h6" />;
};
