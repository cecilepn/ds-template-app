import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
  variant?: 'default' | 'outlined';
}

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
  <button 
    className={clsx(classes['ds-button'], classes[variant || 'default'], className)} 
    {...(props['aria-label'] || props.title ? {} : { 'aria-label': 'Button' })}
  >
    {props.children || 'Button'}
  </button>);
};
