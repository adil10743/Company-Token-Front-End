import React, { useContext } from 'react';
import { ContractContext } from '../context/ContractContext';

const MessageBoard = () => {
    const { readMessage } = useContext(ContractContext)
    return (
        <div className="flex justify-center items-center white-glassmorphism h-32 min-w-[340px] text-sm -top-5 p-5">
            <p className = "whitespace-pre-line">{readMessage}</p>
        </div>

    )
}

export  default MessageBoard