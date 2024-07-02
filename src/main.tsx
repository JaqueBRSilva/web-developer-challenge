import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TopBar from './components/TopBar/TopBar.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />

    <TopBar />

    <App />
  </React.StrictMode>,
)
