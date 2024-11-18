export {};

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
