// TokenSale.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Button from './Button';

const abi = [{ "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "uint256", "name": "_rate", "type": "uint256" }, { "internalType": "address payable", "name": "_wallet", "type": "address" }, { "internalType": "contract IERC20", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_openingtime", "type": "uint256" }, { "internalType": "uint256", "name": "_closingtime", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "prevClosingTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newClosingTime", "type": "uint256" }], "name": "TimedCrowdsaleExtended", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "purchaser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensPurchased", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "beneficiary", "type": "address" }], "name": "buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "capReached", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "closingTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "hasClosed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "openingTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "weiRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];
const TokenSale = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [cap, setCap] = useState('0');
  const [weiRaised, setWeiRaised] = useState('0');

  const init = async () => {
    try {
      
    
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const contractAddress = '0x411B9548cC2D4bE46eF69d680fb7e7894aE2506B';
      const contract = new web3.eth.Contract(abi, contractAddress);

      const capValue = await contract.methods.cap().call();
      const weiRaisedValue = await contract.methods.weiRaised().call();
      setCap(web3.utils.fromWei(capValue, 'ether'));
      setWeiRaised(web3.utils.fromWei(weiRaisedValue, 'ether'));

      setWeb3(web3);
      setAccount(accounts[0]);
      setContract(contract);
      setConnected(true);
      setLoading(false);
    } else {
      alert('Please install MetaMask or another web3 wallet');
    }
  } catch (error) {

    alert('Please make sure you are on BNB Chain in your Web3 Wallet');
  }
  };

  const handleAccountChanged = (accounts) => {
    setAccount(accounts[0]);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChanged);
      }
    };
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (parseFloat(value) < 0.05) {
      setError('Minimum amount is 0.05 BNB');
    } else {
      setError('');
    }
  };

  const buyTokens = async () => {
    if (error || parseFloat(amount) < 0.05) {
      setError('Please enter a valid amount (minimum 0.05 BNB)');
      return;
    }

    try {
      const weiAmount = web3.utils.toWei(amount, 'ether');
      await contract.methods.buyTokens(account).send({ from: account, value: weiAmount });
      console.log('Transaction successful');
      const weiRaisedValue = await contract.methods.weiRaised().call();
      setWeiRaised(web3.utils.fromWei(weiRaisedValue, 'ether'));
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <div className="token-sale mt-10">
      {connected ? (
        <div className="h-max">
          <div className="flex bg-clip-padding justify-center gap-3 sm:gap-8">
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-max sm:h-16 lg:w-max lg:h-16 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="relative sm:text- sm:text-1xl  lg:text-2xl lg:text-1xl   font-semibold text-[#a5b4fc]">
                  Connected Wallet: {account}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
            </div>
          </div>
          <input
            type="number"
            className="ring-offset-purple-400 mr-4 h-5"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount in BNB"
            min="0.05"
          />
          <Button className="buy-button mt-8" onClick={buyTokens} disabled={!!error}>
            Buy Love Tokens
          </Button>




          <div className="mt-8">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-lg  body-1  text-n-2 ">Hard Cap {cap} BNB  </h3>
              <span className="text-lg  text-gray-800 dark:text-white">{weiRaised / cap * 100}%</span>
            </div>
            <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{ width: `${weiRaised / cap * 100}%` }}></div>
            </div>
          </div>

          <div className="body-1 max-w-3xl mx-auto mt-2 mb-6 text-n-2 lg:mb-8">BNB Raised: {weiRaised} BNB</div>




          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <Button className="sign-in-button" onClick={init}>
          Sign In with MetaMask Wallet & Select BNB Chain Network
        </Button>
      )}
    </div>
  );
};

export default TokenSale;
