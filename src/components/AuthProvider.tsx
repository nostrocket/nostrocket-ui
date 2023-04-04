import { createContext } from 'react'

interface IProviderProps {
  children: React.ReactNode
}

export interface IAuthContextType {
  isAuthenticated: boolean
  publicKey: () => Promise<string | undefined>
}

let isAuthenticated: boolean = false
const AuthContext = createContext<IAuthContextType | null>(null)
const AuthProvider = ({ children }: IProviderProps): JSX.Element => {
  isAuthenticated = window.nostr !== undefined

  const publicKey = async (): Promise<string | undefined> => {
    return isAuthenticated ? window.nostr.getPublicKey() : undefined
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, publicKey }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider
