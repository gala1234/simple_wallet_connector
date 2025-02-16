import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { WagmiConfig, createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";
import { Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

// Sepolia Testnet Configuration
const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      id: 11155111, // Sepolia Chain ID
      name: "Sepolia",
      network: "sepolia",
      nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "SEP",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: [
            "https://sepolia.infura.io/v3/4bf9d2d334e04ffd8f066393def54a05",
          ],
        },
        public: {
          http: [
            "https://sepolia.infura.io/v3/4bf9d2d334e04ffd8f066393def54a05",
          ],
        },
      },
    },
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://sepolia.infura.io/v3/<YOUR_INFURA_PROJECT_ID>`,
      }),
    }),
    publicProvider(),
  ]
);

const connectors = w3mConnectors({ chains, version: 1 });
const ethereumClient = new EthereumClient(chains, connectors);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const projectId = "<YOUR_WALLET_CONNECT_PROJECT_ID>"; // Get your project ID from WalletConnect

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  </React.StrictMode>
);
