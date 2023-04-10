import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'services/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
