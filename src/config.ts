import "./index.css";
import {
  createConfig,
  http,
  //   useBlockNumber
} from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// useBlockNumber({ chainId: 123 })

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${PROJECT_ID}`),
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${PROJECT_ID}`),
  },
});
