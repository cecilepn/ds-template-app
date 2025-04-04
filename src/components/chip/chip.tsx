import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import classes from './chip.module.css';

export interface ChipProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  variant: 'default' | 'success' |  'error' ;

}

export const Chip = ({ className, variant, ...props }: ChipProps) => {
  return <div className={clsx(classes['ds-chip'], classes[variant], className)} {...props}>{props.children || 'Chip'}</div>;
};
