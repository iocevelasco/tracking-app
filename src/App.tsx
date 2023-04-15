import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button'
import { AppContainer } from './App.style'
import AuthenticatedApp from 'AuthenticatedApp'
function App() {
  return (
    <AppContainer>
      <AuthenticatedApp />
    </AppContainer>
  )
}

export default App
