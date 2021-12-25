import { ChainId, SupportedNetwork, NETWORK_DETAIL } from "../constants";

export async function addTokenToMetamask(ethereum, id, symbol, network) {
  if (+ethereum.networkVersion !== ChainId[network]) {
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          { ...NETWORK_DETAIL[ChainId[network]], metamaskAddable: undefined },
        ],
      });
    } catch (err) {
      console.error(`error adding network to metamask`, err);
    } finally {
      return;
    }
  }

  let tokenListURL;
  if (network === SupportedNetwork.XDAI)
    //tokenListURL = "https://tokens.honeyswap.org";
    tokenListURL = "https://raw.githubusercontent.com/metroswap/new-host/main/metroswap.json";
  else if (network === SupportedNetwork.MATIC)
    tokenListURL =
      "https://unpkg.com/quickswap-default-token-list@latest/build/quickswap-default.tokenlist.json";
  if (network === SupportedNetwork.AVALANCHE)
    tokenListURL =
      "https://raw.githubusercontent.com/metroswap/new-host/main/avalanche.json";
  if (network === SupportedNetwork.FUSE)
    tokenListURL =
      "https://raw.githubusercontent.com/metroswap/new-host/main/fuse.json";
  if (network === SupportedNetwork.BINANCE)
    tokenListURL =
      "https://raw.githubusercontent.com/metroswap/new-host/main/binance.json";
  if (network === SupportedNetwork.FANTOM)
    tokenListURL =
      "https://raw.githubusercontent.com/metroswap/new-host/main/fantom.json";

  const response = await fetch(tokenListURL);

  if (!response.ok) {
    console.warn("could not fetch token list");
    return;
  }

  const { tokens } = await response.json();
  const token = tokens.find((tkn) => tkn.symbol === symbol);

  try {
    await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: id,
          symbol: symbol,
          decimals: token.decimals,
          image: token.logoURI,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}