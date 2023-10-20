import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { goerli, polygonMumbai, avalancheFuji } from 'wagmi/chains'

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,

    // Required
    appName: "Nebula",
    chains: [goerli, polygonMumbai, avalancheFuji],
    // Optional
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
