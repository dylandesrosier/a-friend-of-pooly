import { useContractRead } from "wagmi";

export const useNftBalanceOf = (
  usersAddress: string,
  addressOrName: string
) => {
  return useContractRead(
    {
      addressOrName,
      contractInterface: [
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    "balanceOf",
    { args: usersAddress, enabled: !!usersAddress }
  );
};
