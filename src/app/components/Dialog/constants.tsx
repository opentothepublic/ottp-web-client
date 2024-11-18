export type SignInOption = {
  name: WalletProviders;
  icon: JSX.Element;
};

enum WalletProviders {
  METAMASK = "Metamask",
  COINBASE = "Coinbase",
  WALLETCONNECT = "Walletconnect",
  FARCASTER = "Farcaster",
}

export const signInMetamask: SignInOption[] = [
  {
    name: WalletProviders.METAMASK,
    icon: <span className="text-orange-500 text-xl">🦊</span>, // Placeholder for MetaMask logo
  },
];

export const signInOptions: SignInOption[] = [
  {
    name: WalletProviders.COINBASE,
    icon: <span className="text-blue-600 text-xl">⬤</span>, // Placeholder for Coinbase logo
  },
  {
    name: WalletProviders.METAMASK,
    icon: <span className="text-orange-500 text-xl">🦊</span>, // Placeholder for MetaMask logo
  },
  {
    name: WalletProviders.WALLETCONNECT,
    icon: <span className="text-blue-400 text-xl">🌐</span>, // Placeholder for WalletConnect logo
  },
  {
    name: WalletProviders.FARCASTER,
    icon: <span className="text-purple-600 text-xl">🏛️</span>, // Placeholder for Farcaster logo
  },
];
