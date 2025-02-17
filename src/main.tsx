import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  WagmiProvider,
  // useBlockNumber
} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <>
          <App />
        </>
        {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
