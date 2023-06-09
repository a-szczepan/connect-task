import { Wallet, getWallets } from '@wallet-standard/core'

export interface IWalletListItem {
  name: string
  icon: string
  recent?: boolean
  detected?: boolean
  hasMobileVersion?: boolean
  highlighted?: boolean
}

export const getWalletsList = (
  presetList: Omit<IWalletListItem, 'recent' | 'detected'>[],
  walletsFilterCb: (wallet: Wallet) => boolean,
  recentWalletName?: string
) => {
  const { get } = getWallets()
  const windowWallets = get()

  const walletsData: Record<string, IWalletListItem> = {}

  presetList.forEach((wallet) => {
    walletsData[wallet.name] = wallet
  })

  windowWallets.filter(walletsFilterCb).forEach((wallet) => {
    walletsData[wallet.name] = {
      ...(walletsData?.[wallet.name] ?? wallet),
      detected: true,
      recent: recentWalletName === wallet.name
    }
  })

  return Object.values(walletsData)
}

const REQUIRED_FEATURES = ['standard:connect', 'standard:events']

export function isStandardWalletAdapterCompatibleWallet(
  wallet: Wallet,
  features: string[] = []
): boolean {
  return [...REQUIRED_FEATURES, ...features].every((feature) => feature in wallet.features)
}
