import { useMediaQuery, useTheme } from '@mui/material'
//import TopMenu from 'ui/components/TopMenu'
import { AuthedAppLayoutContainer, ContentContainer, ContentWrapper } from './AuthedAppLayout.style'
import { authedAppLayoutClasses, AuthedAppLayoutProps } from './AuthedAppLayout.utils'

export default function AuthedAppLayout({
  topMenuProps,
  children,
  contentWrapperRef,
  hasCustomSpacing,
  className,
}: AuthedAppLayoutProps) {
  const theme = useTheme()

  return (
    <AuthedAppLayoutContainer className={className}>
      {/* <TopMenu {...topMenuProps} /> */}
      <ContentWrapper $hasCustomSpacing={hasCustomSpacing} ref={contentWrapperRef}>
        <ContentContainer className={authedAppLayoutClasses.contentWrapper}>
          {children}
        </ContentContainer>
      </ContentWrapper>
    </AuthedAppLayoutContainer>
  )
}
