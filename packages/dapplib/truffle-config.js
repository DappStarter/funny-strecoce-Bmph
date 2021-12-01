require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong riot sister property hunt brass equal gauge'; 
let testAccounts = [
"0xb2d8c6aae299c4afb0b087af06958aca4bda08cf534b69ad0321faf5457b7b24",
"0x662792fc4d8eb43fb095852bcb7e45d4473e09e6b955e5b12eaba3d4d18baddf",
"0x3cae5af9fe9ceee0db170af38afd05afdc04a88b88ada5fab7768d3ee8d55555",
"0xabb7c572f87008d27e8cf5fed0dad396961e74d13f4575ee2da3e0079f27a8ca",
"0x543c49e26f823d70bfd66a1ad7aad31c783aaeefce57171fcbc2d464eb89ad30",
"0x85c1e8669eca9c458a0dd50650110e2aece6df1203b25089b27a993562bb7a01",
"0x66e4442406eaf7db5f303de74453e2fcf25ac4e291958aeffce63bec99cae831",
"0x8e4de1ce2a7d3f8ea261c326aa4fa7306833d0b429ff75bac57bfab135758bb2",
"0x8b6c301c71671e35edd95ecbef2ce64254b1dd5ca3a2cf6227cb1636484b646b",
"0x1bfebc6bea4fbe110de40d07e243eefe740a7cdb00792602b0b9e90554d64978"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


