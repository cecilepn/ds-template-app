import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './text.module.css';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  className?: string;
  variant?: 'heading' | 'subheading' | 'body';
  children: React.ReactNode;  
}

export const Text = ({ className, variant,   ...props }: TextProps) => {
  return <p className={clsx(classes['ds-text'], classes[variant || 'heading'], className)} {...props}>{props.children} ({variant})</p>;
};
