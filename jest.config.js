module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jest-environment-node',
    testTimeout: 60000,
    moduleNameMapper: {
      '^@polkadot/api$': '@polkadot/api/index.cjs',
      '^@polkadot/api-derive$': '@polkadot/api-derive/index.cjs',
      '^@polkadot/api-derive/(.*)': '@polkadot/api-derive/$1.cjs',
      '^@polkadot/rpc-core$': '@polkadot/rpc-core/index.cjs',
      '^@polkadot/rpc-core/(.*)': '@polkadot/rpc-core/$1.cjs',
      '^@polkadot/rpc-provider$': '@polkadot/rpc-provider/index.cjs',
      '^@polkadot/rpc-provider/(.*)': '@polkadot/rpc-provider/$1.cjs',
      '^@polkadot/rpc-augment$': '@polkadot/rpc-augment/index.cjs',
      '^@polkadot/types-unknown/(.*)': '@polkadot/types-unknown/$1.cjs',
      '^@polkadot/x-fetch$': '@polkadot/x-fetch/node.cjs',
      '^@polkadot/x-ws$': '@polkadot/x-ws/node.cjs',
      '^@polkadot/keyring$': '@polkadot/keyring/index.cjs',
      '^@polkadot/util-crypto/(.*)': '@polkadot/util-crypto/$1.cjs',

      '^@polkadot/metadata/(.*)/(.*)': '@polkadot/metadata/$1/$2.cjs',
      '^@polkadot/metadata/decorate$': '@polkadot/metadata/decorate/index.cjs',
      '^@polkadot/metadata/(.*)': '@polkadot/metadata/$1.cjs',
      '^@polkadot/metadata$': '@polkadot/metadata/index.cjs',
      '^@polkadot/networks/(.*)': '@polkadot/networks/$1.cjs',
      '^@polkadot/networks$': '@polkadot/networks/index.cjs',
      '^@polkadot/types-codec$': '@polkadot/types-codec/index.cjs',
      '^@polkadot/types-codec/(.*)': '@polkadot/types-codec/$1.cjs',
      '^@polkadot/types-create$': '@polkadot/types-create/index.cjs',
      '^@polkadot/types-create/(.*)': '@polkadot/types-create/$1.cjs',
      '^@polkadot/types/primitive$': '@polkadot/types/primitive/index.cjs',
      '^@polkadot/types/augment$': '@polkadot/types/augment/index.cjs',
      '^@polkadot/types/metadata$': '@polkadot/types/metadata/index.cjs',
      '^@polkadot/types/metadata/decorate$': '@polkadot/types/metadata/decorate/index.cjs',
      '^@polkadot/types/types$': '@polkadot/types/types/index.cjs',
      '^@polkadot/types/(.*)/(.*)': '@polkadot/types/$1/$2.cjs',
      '^@polkadot/types/(.*)': '@polkadot/types/$1.cjs',
      '^@polkadot/types$': '@polkadot/types/index.cjs',
      '^@polkadot/types-known/(.*)': '@polkadot/types-known/$1.cjs',
      '^@polkadot/types-known$': '@polkadot/types-known/index.cjs',
      '^@polkadot/util$': '@polkadot/util/index.cjs',
      '^@polkadot/util-crypto$': '@polkadot/util-crypto/index.cjs',
      '^@polkadot/wasm-crypto$': '@polkadot/wasm-crypto/index.cjs',
      '^@polkadot/wasm-crypto-asmjs/(.*)': '@polkadot/wasm-crypto-asmjs/$1.cjs',
      '^@polkadot/wasm-crypto-asmjs$': '@polkadot/wasm-crypto-asmjs/empty.cjs',
      '^@polkadot/wasm-crypto-wasm/(.*)': '@polkadot/wasm-crypto-wasm/$1.cjs',
      '^@polkadot/wasm-crypto-wasm$': '@polkadot/wasm-crypto-wasm/data.cjs',
      '^@polkadot/x-global$': '@polkadot/x-global/index.cjs',
      '^@polkadot/x-randomvalues$': '@polkadot/x-randomvalues/node.cjs',
      '^@polkadot/x-textdecoder$': '@polkadot/x-textdecoder/node.cjs',
      '^@polkadot/x-textencoder$': '@polkadot/x-textencoder/node.cjs',
      '^@polkadot/x-bigint/(.*)': '@polkadot/x-bigint/$1.cjs',
      '^@polkadot/x-bigint$': '@polkadot/x-bigint/index.cjs',
      '^@polkadot/x-noble-secp256k1$': '@polkadot/x-noble-secp256k1/index.cjs',
      '^@polkadot/x-noble-hashes/(.*)': '@polkadot/x-noble-hashes/$1.cjs',
      '^@polkadot/x-noble-hashes$': '@polkadot/x-noble-hashes/index.cjs',
    },
  };
};
