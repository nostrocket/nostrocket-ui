import { useContext, useEffect } from 'react'
import './App.css'
import { type IProviderContext, NostrPoolContext } from './components/NostrPool'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App(): JSX.Element {
  const { initNostrPool } = useContext(NostrPoolContext) as IProviderContext
  useEffect(() => {
    initNostrPool()
  })

  return <RouterProvider router={router} />
}

export default App
