import { ComponentProps, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type PropsType<T extends ElementType> = {
  as?: T
  children: ReactNode
  variant: TypographyVariantTypes
} & ComponentProps<T>

export const Typography = <T extends ElementType = 'span'>({
  as: Component = 'span',
  children,
  className,
  variant,
  ...rest
}: Omit<ComponentProps<T>, keyof PropsType<T>> & PropsType<T>) => {
  const classNames = {
    style: clsx(className, `${s[variant]}`),
  }

  return (
    <Component className={classNames.style} {...rest}>
      {children}
    </Component>
  )
}
export type TypographyVariantTypes =
  | 'Large'
  | 'Large-32'
  | 'LargePlus'
  | 'regular_text-16'
  | 'regular_text-18'
  | 'regular_text-20'
  | 'small-text'
  | 'small-text-16'
  | 'small-text-16-bold-400'
