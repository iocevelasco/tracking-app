import type { MutableRefObject, ReactNode } from 'react'
import type { TopMenuProps } from 'ui/components/TopMenu'

export const authedAppLayoutClasses = {
  contentWrapper: 'content-wrapper',
}

export type AuthedAppLayoutProps = {
  children: ReactNode | JSX.Element | JSX.Element[]
  topMenuProps?: TopMenuProps
  contentWrapperRef?: MutableRefObject<unknown> | ((ref: HTMLElement) => void)
  hasCustomSpacing?: boolean
  className?: string
}
