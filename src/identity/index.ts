export interface Identity {
  Account: string
  Name: string
  About: string
  Picture?: string
  UniqueSovereignBy: string
  CharacterVouchedForBy?: Record<string, string>
  MaintainerBy: string
  PubKeys?: string[]
  OpReturnAddr?: string[][]
  Order: number
}

export type IReplay = Record<string, string>

export interface IContent {
  identity: Record<string, Identity>
  replay: Record<string, string>
}
