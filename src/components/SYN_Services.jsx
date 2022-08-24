import { Loader, MessageBoard } from '.';
import React, { useContext, useState } from 'react';
import { ContractContext } from '../context/ContractContext';

const SYN_Services = ({year}) => {
    const { isLoading, setFileContentMulti, setFileContentWhitelist, handleChange, 
        readFunction, writeFunction
    } = useContext(ContractContext);

    const showFileMulti = (e) => {
        e.preventDefault
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            setFileContentMulti(text)
        }
        reader.readAsText(e.target.files[0])
    } 

    const showFileWhitelist = (e) => {
        e.preventDefault
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            setFileContentWhitelist(text)
        }
        reader.readAsText(e.target.files[0])
    }

    const handleReadFunction = (e) => {
        e.preventDefault
        readFunction({year}, e.target.name)
    }

    const handleWriteFunction = (e) => {
        e.preventDefault
        writeFunction({year}, e.target.name)
    }
    
    return (
        <div className="pr-6 pl-6 pb-6">
            <div className="bg-white">
                <div className="w-full flex justify-center items-center p-3">
                    <h1 className="text-3xl text-black"> Vested Token</h1>
                </div>
                <div className="w-full flex justify-center items-center pb-10 animate-pulse -z-20">
                    <p>To interact with the various function of the different Synpulse Token contracts, please use the buttons below.</p>
                </div>
                <div className="divide-y">
                    <div className="w-full flex justify-center items-center space-x-10 pb-5">
                        <button 
                            type="button" 
                            name="checkStatus"
                            onClick={handleReadFunction}
                            className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-40"> 
                            Check Status 
                        </button>
                        <button 
                            type="button"
                            name="pause"
                            onClick={handleWriteFunction}
                            className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-40"> 
                            Pause Contract 
                        </button>
                        <button 
                            type="button" 
                            name="unpause"
                            onClick={handleWriteFunction}
                            className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-40"> 
                            Unpause Contract
                        </button>
                        <button 
                            type="button" 
                            name="activateWhitelist"
                            onClick={handleWriteFunction}
                            className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-40"> 
                            Activate Whitelist
                        </button>
                        <button 
                            type="button" 
                            name="deactivateWhitelist"
                            onClick={handleWriteFunction}
                            className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44"> 
                            Deactivate Whitelist
                        </button>
                    </div>
                    <div className="w-full flex justify-around items-start p-5 space-x-10">
                        <div className="space-y-3">
                            <div className="flex space-x-5">
                                <span><strong> Address: </strong></span>
                                <input name="inputAddress" type="text" placeholder="0x..." onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                <button 
                                    type="button" 
                                    name="checkTokenBalance"
                                    onClick={handleReadFunction}
                                    className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-48"> 
                                    Check Token Balance
                                </button>
                            </div>
                            <div className="flex space-x-5">
                                <span className="-pr-2"><strong> Amount: </strong></span>
                                <input name="inputAmount" type="number" min="0" step="0.1" placeholder="0" onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                <button
                                    type="button"
                                    name="sendTokensToIndividualAddress"
                                    onClick={handleWriteFunction}
                                    className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-48">
                                        Distribute to Individual
                                </button>
                            </div>
                        </div>
                        <div className="w-[1px] h-20 bg-gray-300"></div>
                        <div className="space-y-3">
                            <div className="flex space-x-5">
                                <span><strong> Addresses: </strong></span>
                                <input name="inputAddressMulti" type="file" onChange={showFileMulti} className="w-[360px] rounded-lg p-1 bg-gray-200 "></input>
                            </div>
                            <div className="flex space-x-5">
                                <span className="pr-4"><strong> Amount: </strong></span>
                                <input name="inputAmountMulti" type="number" min="0" step="0.1" placeholder="0" onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                <button
                                    type="button"
                                    name="sendTokensToMultipleAddresses"
                                    onClick={handleWriteFunction}
                                    className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44">
                                        Distribute Tokens
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center p-5">
                        <div className=" flex space-x-5">
                            <span><strong> Address: </strong></span>
                            <input name="inputAddressOwner" type="text" placeholder="0x..." onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                            <button
                                type="button"
                                name="authorizeOperator"
                                onClick={handleWriteFunction}
                                className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44">
                                    Authorise Operator
                            </button>
                            <button
                                type="button"
                                name="revokeOperator"
                                onClick={handleWriteFunction}
                                className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44">
                                    Revoke Operator
                            </button>
                            <button
                                type="button"
                                name="getOwners"
                                onClick={handleReadFunction}
                                className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44">
                                Get Owners
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className="w-full flex justify-center text-lg"> Operator Functions</h1>
                        <div className="w-full flex justify-around items-start p-5 space-x-10">
                            <div className="space-y-3">
                                <div className="flex space-x-5">
                                    <span><strong> Amount: </strong></span>
                                    <input name="inputAmountVault" type="number" min="0" step="0.1" placeholder="0" onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                    <button 
                                        type="button" 
                                        name="mintTokensToVault"
                                        onClick={handleWriteFunction}
                                        className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-48"> 
                                        Mint Tokens to Vault
                                    </button>
                                </div>
                                <div className="flex space-x-5">
                                    <span className="w-[432px]"></span>
                                    <button
                                        type="button"
                                        name="operatorBurn"
                                        onClick={handleWriteFunction}
                                        className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-48">
                                            Burn Tokens from Vault
                                    </button>
                                </div>
                            </div>
                            <div className="w-[1px] h-20 bg-gray-300"></div>
                            <div className="space-y-3">
                                <div className="flex space-x-5">
                                    <span><strong> Addresses: </strong></span>
                                    <input name="inputAddressWhitelist" type="file" onChange={showFileWhitelist} className="w-[360px] rounded-lg p-1 bg-gray-200 "></input>
                                    <button 
                                        type="button" 
                                        name="whitelistUsers"
                                        onClick={handleWriteFunction}
                                        className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44"> 
                                            Whitelist Users
                                    </button>
                                </div>
                                <div className="flex space-x-5">
                                    <span className="w-[446px]"></span>
                                    <button
                                        type="button"
                                        name="removeFromWhitelist"
                                        onClick={handleWriteFunction}
                                        className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-44">
                                            Unwhitelist Users
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center p-3">
                            <div className="space-y-3">
                                <div className="flex space-x-5">
                                    <span><strong> From Address: </strong></span>
                                    <input name="inputAddressOperatorSend" type="text" placeholder="0x..." onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                </div>
                                <div className="flex space-x-5">
                                    <span className="pr-10"><strong> Amount: </strong></span>
                                    <input name="inputAmountOperatorSend" type="number" min="0" step="0.1" placeholder="0" onChange={handleChange} className="w-[360px] rounded-lg p-1 bg-gray-200"></input>
                                    <button
                                        type="button"
                                        name="operatorSend"
                                        onClick={handleWriteFunction}
                                        className="text-white bg-black hover:bg-orange-600 shadow-xl cursor-pointer p-2 w-48">
                                            Operator Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <MessageBoard />
                        <div className="absolute flex p-5 right-10">
                            {isLoading ? (<Loader />) : ("")}
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default SYN_Services