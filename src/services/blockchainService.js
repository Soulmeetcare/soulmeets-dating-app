const blockchainServicePro = {
    mintNFT: (data) => fetch('/api/blockchain/mint/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default blockchainServicePro;