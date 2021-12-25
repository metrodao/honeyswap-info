export const SupportedNetwork = Object.freeze({
  // MAINNET: "Mainnet",
  XDAI: "xDAI",
  MATIC: "MATIC",
  AVALANCHE: "Avalanche",
  FUSE: "Fuse",
  BINANCE: "Binance",
  FANTOM: "Fantom"
});

export const ChainId = Object.freeze({
  // [SupportedNetwork.MAINNET]: 1,
  [SupportedNetwork.XDAI]: 100,
  [SupportedNetwork.MATIC]: 137,
  [SupportedNetwork.AVALANCHE]: 43114,
  [SupportedNetwork.FUSE]: 122,
  [SupportedNetwork.BINANCE]: 56,
  [SupportedNetwork.FANTOM]: 250
});

export const SupportedNetworkForChainId = Object.freeze({
  // [ChainId[SupportedNetwork.MAINNET]]: SupportedNetwork.MAINNET,
  [ChainId[SupportedNetwork.XDAI]]: SupportedNetwork.XDAI,
  [ChainId[SupportedNetwork.MATIC]]: SupportedNetwork.MATIC,
  [ChainId[SupportedNetwork.AVALANCHE]]: SupportedNetwork.AVALANCHE,
  [ChainId[SupportedNetwork.FUSE]]: SupportedNetwork.FUSE,
  [ChainId[SupportedNetwork.BINANCE]]: SupportedNetwork.BINANCE,
  [ChainId[SupportedNetwork.FANTOM]]: SupportedNetwork.FANTOM
});

export const FACTORY_ADDRESS = {
  // [SupportedNetwork.MAINNET]: "0xd34971BaB6E5E356fd250715F5dE0492BB070452",
  [SupportedNetwork.XDAI]: "0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01",
  [SupportedNetwork.MATIC]: "0x0F10f5a1006F50eDeCd086cCD5704ade25709Ab2",
  [SupportedNetwork.AVALANCHE]: "0x9A734E90D89f0c346E27c404D350Ff56DEAD55f1",
  [SupportedNetwork.FUSE]: "0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01",
  [SupportedNetwork.BINANCE]: "0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01",
  [SupportedNetwork.FANTOM]: "0x9EA3fBcF8173555e1eb7326B664BeaF1F5f86F01"
};

export const NATIVE_CURRENCY_SYMBOL = {
  // [SupportedNetwork.MAINNET]: "ETH",
  [SupportedNetwork.XDAI]: "xDAI",
  [SupportedNetwork.MATIC]: "MATIC",
  [SupportedNetwork.AVALANCHE]: "AVAX",
  [SupportedNetwork.FUSE]: "FUSE",
  [SupportedNetwork.BINANCE]: "BNB",
  [SupportedNetwork.FANTOM]: "FTM"
};

export const NATIVE_CURRENCY_WRAPPER = {
  // [SupportedNetwork.MAINNET]: {
  //   symbol: "WETH",
  //   address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  // },
  [SupportedNetwork.XDAI]: {
    symbol: "WXDAI",
    address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
  },
  [SupportedNetwork.MATIC]: {
    symbol: "WMATIC",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  },
  [SupportedNetwork.AVALANCHE]: {
    symbol: "WAVAX",
    address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
  },
  [SupportedNetwork.FUSE]: {
    symbol: "WFUSE",
    address: "0x0be9e53fd7edac9f859882afdda116645287c629",
  },
  [SupportedNetwork.BINANCE]: {
    symbol: "WBNB",
    address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  },
  [SupportedNetwork.FANTOM]: {
    symbol: "WFTM",
    address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  }
};

export const HNY_ADDRESS = {
  // [SupportedNetwork.MAINNET]: "0xc3589f56b6869824804a5ea29f2c9886af1b0fce",
  [SupportedNetwork.XDAI]: "0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9",
  [SupportedNetwork.MATIC]: "0xb371248Dd0f9E4061ccf8850E9223Ca48Aa7CA4b",
  [SupportedNetwork.AVALANCHE]: "0x0000000000000000000000000000000000000000",
  [SupportedNetwork.FUSE]: "0x0000000000000000000000000000000000000000",
  [SupportedNetwork.BINANCE]: "0x0000000000000000000000000000000000000000",
  [SupportedNetwork.FANTOM]: "0x0000000000000000000000000000000000000000"
};

export const ETHERSCAN_PREFIXES = {
  // [SupportedNetwork.MAINNET]: "",
};

export const BUNDLE_ID = "1";

export const timeframeOptions = {
  WEEK: "1 week",
  MONTH: "1 month",
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: "All time",
};

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
  "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
  "0xe31debd7abff90b06bca21010dd860d8701fd901",
  "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
  "0xb7d918d7631fcdd0954205e3a6b205a10a31a085"
];

// pair blacklist
export const PAIR_BLACKLIST = ["0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5"];

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = [
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
];

export const NETWORK_DETAIL = {
  100: {
    chainId: "0x64",
    chainName: "xDAI",
    nativeCurrency: {
      name: "xDAI",
      symbol: "xDAI",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.xdaichain.com/"],
    blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
    metamaskAddable: true,
  },
  137: {
    chainId: "0x89",
    chainName: "Matic",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mainnet.matic.quiknode.pro/"],
    blockExplorerUrls: ["https://explorer.matic.network/"],
    metamaskAddable: true,
  },
  43114: {
    chainId: "0xA86A",
    chainName: "Avalanche",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc/"],
    blockExplorerUrls: ["https://snowtrace.io/"],
    metamaskAddable: true,
  },
  122: {
    chainId: "0x7A",
    chainName: "Fuse",
    nativeCurrency: {
      name: "Fuse",
      symbol: "FUSE",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.fuse.io/"],
    blockExplorerUrls: ["https://explorer.fuse.io/"],
    metamaskAddable: true,
  },
  56: {
    chainId: "0x38",
    chainName: "Binance",
    nativeCurrency: {
      name: "Binance",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.ninicoin.io/"],
    blockExplorerUrls: ["https://bscscan.com/"],
    metamaskAddable: true,
  },
  250: {
    chainId: "0xFA",
    chainName: "Fantom",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ftm.tools//"],
    blockExplorerUrls: ["https://ftmscan.com/"],
    metamaskAddable: true,
  }
};

export const NETWORK_COLORS = {
  [SupportedNetwork.XDAI]: {
    hex: "#FCC941",
    rgba: "rgba(252, 201, 65, 0)",
  },
  [SupportedNetwork.MATIC]: {
    hex: "#8247E5",
    rgba: "rgba(130, 71, 229, 0)",
  },
  [SupportedNetwork.AVALANCHE]: {
    hex: "#e84142",
    rgba: "rgba(232, 65, 66, 1)",
  },
  [SupportedNetwork.FUSE]: {
    hex: "#e5fd41",
    rgba: "rgba(229, 253, 65, 1)",
  },
  [SupportedNetwork.BINANCE]: {
    hex: "#f0bc17",
    rgba: "rgba(240, 188, 23, 1)",
  },
  [SupportedNetwork.FANTOM]: {
    hex: "#001f68",
    rgba: "rgba(0, 31, 104, 1)",
  }
};
