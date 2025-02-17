import { useAccount, useEnsName } from "wagmi";

export function Profile() {
  console.log("Profile component rendering");

  const { address, isConnected } = useAccount();
  console.log("Wagmi hook values:", { isConnected, address });

  const { data, error, status } = useEnsName({
    address: isConnected ? address : undefined,
  });

  console.log({ isConnected }, { address });
  console.log({ data });

  if (!isConnected && !isConnected) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        // onClick={() => connect()}
      >
        Connect Wallet
      </button>
    );
  }

  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return (
    <div>
      <p className="text-lg mb-2">Connected Address: {address}</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        // onClick={disconnect}
      >
        Disconnect Wallet
      </button>
    </div>
  );
}
