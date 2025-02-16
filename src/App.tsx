import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Wallet Connector</h1>

      {!isConnected ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => connect()}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p className="text-lg mb-2">Connected Address: {address}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={disconnect}
          >
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
