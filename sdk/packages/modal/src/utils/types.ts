export enum QueryNetwork {
  SOLANA = 'SOLANA',
  SUI = 'SUI',
  POLKADOT = 'POLKADOT'
}

export interface WalletSelectorItem {
  name: string
  icon: string
  link: string
  detected?: boolean
  recent?: boolean
}

export interface FooterConfig {
  termsOfServiceURL?: string
  privacyPolicyURL?: string
  linkTarget?: '_self' | '_blank' | '_parent' | '_top'
}

export enum SelectorView {
  DESKTOP_MAIN,
  MOBILE_MAIN,
  MOBILE_QR,
  MOBILE_ALL,
  CONNECTING
}
