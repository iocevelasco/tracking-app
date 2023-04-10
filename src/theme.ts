import { createTheme } from '@mui/material'
import type { Shadows } from '@mui/material/styles/shadows'
import { appColors } from 'utils/colors'

const shadows = Array(25).fill('') as Shadows
shadows[1] = '0px 0px 8px rgba(46, 49, 146, 0.15)'
shadows[2] = '0px 4px 20px rgba(46, 49, 146, 0.18)'
shadows[3] = '0px 4px 20px rgba(46, 49, 146, 0.08)'
shadows[4] = '0px 0px 6px rgba(46, 49, 146, 0.18)'
shadows[5] = '0px 4px 16px 0px rgba(92, 92, 92, 0.09)'

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 414,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: appColors.primary,
    },
    secondary: {
      main: appColors.secondary,
    },
    background: {
      paper: appColors.white,
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.375rem',
      lineHeight: 1.4,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 600,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      fontStyle: 'normal',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      fontStyle: 'normal',
    },
    body1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 0.75,
      fontStyle: 'normal',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.4rem',
      fontStyle: 'normal',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
  shadows,
})

export default baseTheme
