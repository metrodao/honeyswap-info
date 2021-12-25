import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { SupportedNetwork } from "../constants";

export const clients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     // TODO: change this when release day comes
  //     uri: "https://api.thegraph.com/subgraphs/name/luzzif/swapr-mainnet-alpha",
  //   }),
  //   cache: new InMemoryCache(),
  //   shouldBatch: true,
  // }),
  [SupportedNetwork.XDAI]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-xdai",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-polygon",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.AVALANCHE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-avalanche",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.FUSE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-fuse",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.BINANCE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-bsc",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  }),
  [SupportedNetwork.FANTOM]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/tetcoin/metroswap-fantom",
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })
};

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/index-node/graphql",
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
});

export const blockClients = {
  // [SupportedNetwork.MAINNET]: new ApolloClient({
  //   link: new HttpLink({
  //     uri:
  //       "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks",
  //   }),
  //   cache: new InMemoryCache(),
  // }),
  [SupportedNetwork.XDAI]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/elkfinance/xdai-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.MATIC]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/elkfinance/matic-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.AVALANCHE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/dasconnor/avalanche-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.FUSE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/fuseio/fuse-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.BINANCE]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/elkfinance/bsc-blocks",
    }),
    cache: new InMemoryCache(),
  }),
  [SupportedNetwork.FANTOM]: new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/ducquangkstn/fantom-blocks",
    }),
    cache: new InMemoryCache(),
  })
};
