import { useContext, useEffect } from 'react'
import './App.css'
import { type IProviderContext, NostrPoolContext } from './components/NostrPool'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App(): JSX.Element {
  const { initNostrPool } = useContext(NostrPoolContext) as IProviderContext
  useEffect(() => {
    initNostrPool()
  })

  useEffect(() => {
    const pubKeyTimeout = setTimeout(() => {
      if (window.nostr) {
        window.nostr.getPublicKey().then((pubkey: string)=>{
          console.log("Current pubkey is: ", pubkey);
        })
      } else {
        alert("You can look but you can't touch. Please install a NIP-07 nostr signing browser extension (such as GetAlby or Nos2x) if you want to interact with Nostrocket!")
      }
    }, 100)

    return () => clearTimeout(pubKeyTimeout)
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/nostrocket-ui" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
