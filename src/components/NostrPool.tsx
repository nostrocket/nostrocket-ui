import { createContext, useRef } from 'react'
import { SimplePool, type Event, type Sub } from 'nostr-tools'
import { type IContent, type Identity } from '../identity'

interface IProviderProps {
  children: React.ReactNode
}

export interface IProviderContext {
  initNostrPool: () => void
}

let currentState: IContent
let identities: Identity[] = []
let isStateReady: boolean = false

const relays: string[] = ['wss://nostr.688.org']
const NostrPoolContext = createContext<IProviderContext | null>(null)

const NostrPoolProvider = ({ children }: IProviderProps): JSX.Element => {
  const nostrPool = useRef<SimplePool | null>(null)
  const initNostrPool: (() => void) | null = (): void => {
    nostrPool.current = new SimplePool()
    const sub: Sub = nostrPool.current.sub(
      [...relays],
      [
        {
          kinds: [10310],
          '#e': [
            'fd459ea06157e30cfb87f7062ee3014bc143ecda072dd92ee6ea4315a6d2df1c',
          ],
        },
      ]
    )

    sub.on('event', (event: Event): void | Promise<void> => {
      currentState = JSON.parse(event.content)
      isStateReady = true

      const interval = setInterval(() => {
        if (isStateReady) {
          const temp: Identity[] = [...identities]
          Object.keys(currentState.identity).forEach((account: string) => {
            console.log(currentState.identity[account])
            temp.push(currentState.identity[account])
          })

          identities = temp
          clearInterval(interval)
        }
      }, 200)
    })
  }

  return (
    <NostrPoolContext.Provider value={{ initNostrPool }}>
      {children}
    </NostrPoolContext.Provider>
  )
}

export { NostrPoolContext }
export default NostrPoolProvider
