
async function main(){
  const ethers = require('ethers');
  const abi = require('./abi.json')
// Set up Ethereum provider
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/35b4f7c2e00c47419c8a89c39832837b');

// Address of the Uniswap v2 router contract
const uniswapRouterAddress = '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852'; // Mainnet address, replace with the appropriate address

async function getLiquidity(WETH, USDT) {
  const uniswapRouter = new ethers.Contract(uniswapRouterAddress,abi, provider);

  // Get the reserves for the trading pair
  const reserves = await uniswapRouter.getReserves();
  console.log(reserves)

  return reserves;
}

// Example usage
const tokenAAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; // Replace with actual token address
const tokenBAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // Replace with actual token address

const liquidity = await getLiquidity(tokenAAddress, tokenBAddress);
console.log('Liquidity:', liquidity);
}
main()