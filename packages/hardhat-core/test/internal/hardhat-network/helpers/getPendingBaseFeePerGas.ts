import { BN } from "ethereumjs-util";

import { EthereumProvider } from "../../../../src/types";

export async function getPendingBaseFeePerGas(
  provider: EthereumProvider
): Promise<BN> {
  const pendingBlock = await provider.send("eth_getBlockByNumber", [
    "pending",
    false,
  ]);
  return pendingBlock.baseFeePerGas ?? new BN(1);
}
