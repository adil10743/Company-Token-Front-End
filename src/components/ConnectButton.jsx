import React, { useContext } from 'react';
import { ContractContext } from '../context/ContractContext';

const ConnectButton = () => {

    const { connectWallet } = useContext(ContractContext);

    return (
        <div className="relative">
            <button 
                onClick={connectWallet}
                className="peer text-white bg-gray-800 text-md font-semibold rounded-xl hover:bg-blue-400 p-2 w-40">
               Connect Wallet
            </button>
        </div>
    )
}

export default ConnectButton
