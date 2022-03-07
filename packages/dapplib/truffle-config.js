require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture street cost oven equip idea hero force gather'; 
let testAccounts = [
"0x783a827ae4c06c364949e0b96fa5d72682b99279e384ad566dfcaceedece2d7a",
"0xae2367a44573971276658c9dcbc39636f47b21344f44236c765b8578efdaaee5",
"0xa0db79aca1d5211dd4a4ac31a7615bf0c2794a281d03557768ccaafce1d9528b",
"0xabfceb50353db5fa5e6f8ad52e41dde05de52071c6c068d8a23dc1b60ccfb4eb",
"0xa7981470f92be6f8b2c8596ca8da0f9379e7e64d3408c71516f771ceaa7d82a1",
"0xeac2aeac4ca5376b09124f1edefc33531cd9d51183d6d8eb2278dd1c07d29245",
"0x1050465a1b6c25a1334e71c95c58d457b3ca62707d4aec5fd5b42a6eaeba80c0",
"0x92f300ecfebea8db6800a148ed08abdc1f24f9503a2fb522fc2907619a3b1c7d",
"0x368d5428bdff7f41dc729f15947848e4b5231e1ee46727394970ca732bf755ad",
"0xf51f1e54f69f5e9bf96c14d6a4652d2f6e3c810815a9604337bc3e6bec8221c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

