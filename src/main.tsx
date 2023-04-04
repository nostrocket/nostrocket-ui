import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NostrPoolProvider from './components/NostrPool'
import AuthProvider from './components/AuthProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <NostrPoolProvider>
        <App />
      </NostrPoolProvider>
    </AuthProvider>
  </React.StrictMode>
)
