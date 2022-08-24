import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { contractABI2021, contractABI2022, contractABISYN, contractAddress2021, contractAddress2022, contractAddressSYN } from '../utils/constants'

export const ContractContext = React.createContext();


const contractABI = ({year}) => {
    return(
        year=="2021" ? contractABI2021 :
            year=="2022" ? contractABI2022 :
                year=="2023" ? "2023" :
                    year=="SYN" ? contractABISYN:
                        "None"
    )
}


const contractAddress = ({year}) => {
    return (
        year=="2021" ? contractAddress2021 :
            year=="2022" ? contractAddress2022 :
                year=="2023" ? "0x2023" :
                    year=="SYN" ? contractAddressSYN:
                        "None"
    )
}


const getEthereumContract = ({year}) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress({year}), contractABI({year}).abi, signer);
    return transactionContract;
}


export const TransactionProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({ inputAddress: '', inputAmount: '', inputAmountMulti: '', inputAddressOwner: '', inputAmountVault: '', inputAddressOperatorSend: '', inputAmountOperatorSend: ''})
    const [fileContentMulti, setFileContentMulti] = useState('')
    const [fileContentWhitelist, setFileContentWhitelist] = useState('')
    const [readMessage, setReadMessage] = useState('')

    const handleChange = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' })
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);

            } else {
                setReadMessage('No accounts found.')
                setCurrentAccount('')
            }
        } catch (error) {  
            console.log(error)

            throw new Error("No ethereum object.")
        } 
    }

    const connectWallet = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0]);
            setReadMessage('')
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }

    const readFunction = async ({year}, name) => {
        try {
            if (!window.ethereum) return alert("Please install metamask")
            const { inputAddress, inputAmount, inputAmountMulti, inputAddressOwner, inputAmountVault, inputAddressOperatorSend, inputAmountOperatorSend } = formData;
            const transactionContract = getEthereumContract({year})

            if (name =="checkStatus") {
                const ContractStatus = await transactionContract.paused()
                var ContractWhitelistEnabledRead = ""
                if (year == "SYN") {
                    const ContractWhitelistEnabled = await transactionContract.whitelistEnabled()
                    if (ContractWhitelistEnabled) {
                        ContractWhitelistEnabledRead = "Whitelist Enabled."
                    } else {
                        ContractWhitelistEnabledRead = "Whitelist Disabled."
                    }
                }
                if(ContractStatus) {
                    setReadMessage('Paused. ' + ContractWhitelistEnabledRead)
                } else {
                    setReadMessage('Unpaused. ' + ContractWhitelistEnabledRead)
                }

            } else if (name == "checkTokenBalance") {
                const balance = await transactionContract.balanceOf(inputAddress)
                if (year == "SYN") {
                    setReadMessage(ethers.utils.formatEther(balance._hex))
                } else { setReadMessage(parseInt(balance._hex)) }

            } else if (name == "getOwners") {
                if (year == "SYN") {
                    const vaultContract = await transactionContract.vaultContract()
                    const administrator = await transactionContract.administrator()
                    const Operators = await transactionContract.defaultOperators()
                    setReadMessage( <span>
                                        <p><b>Vault: </b><span>{vaultContract}</span></p>
                                        <p><b>Administrator: </b><span>{administrator}</span></p>
                                        <p><b>Operators: </b><span>{Operators}</span></p>
                                    </span>)
                }
            }
        } catch (error) {
            console.log(error)
            setReadMessage('Fail: ' + error.message.substring(error.message.indexOf("execution reverted: ") + 20, error.message.indexOf(", method=")-1));
        }  
    }

    const writeFunction = async ({year}, name) => {
        try {
            if(!window.ethereum) return alert("Please install metamask")
            const { inputAddress, inputAmount, inputAmountMulti, inputAddressOwner, inputAmountVault, inputAddressOperatorSend, inputAmountOperatorSend } = formData;
            const transactionContract= getEthereumContract({year})
            var transactionHash = ""
            var vaultContract = ""
            if (year == "SYN") {
                vaultContract = await transactionContract.vaultContract()
            } 

            if (name == "pause") {
                if(year == "SYN") {
                    transactionHash = await transactionContract.pauseContract()
                } else {
                    transactionHash = await transactionContract.vestAllTokens()
                }

            } else if (name == "unpause") {
                if (year == "SYN") {
                    transactionHash = await transactionContract.unpauseContract()
                } else {
                    transactionHash = await transactionContract.reactivateContract()
                }

            } else if (name == "activateWhitelist") {
                transactionHash = await transactionContract.activateWhitelist()

            } else if (name == "deactivateWhitelist") {
                transactionHash = await transactionContract.deactivateWhitelist()

            } else if (name == "sendTokensToIndividualAddress") {
                if (year == "SYN") {
                    transactionHash = await transactionContract.sendTokensToIndividualAddress(inputAddress, ethers.utils.parseUnits(inputAmount.toString(), "ether"), "0x")
                } else {
                    transactionHash = await transactionContract.transfer(inputAddress, inputAmount)
                }

            } else if (name == "sendTokensToMultipleAddresses") {
                if (year == "SYN") {
                    transactionHash = await transactionContract.sendTokensToMultipleAddresses(fileContentMulti.split(','), ethers.utils.parseUnits(inputAmountMulti.toString(), "ether"), "0x")
                } else {
                    transactionHash = await transactionContract.sendTokensToMultipleAddresses(fileContentMulti.split(','), inputAmountMulti)
                }
                
            } else if (name == "delegateOwnership"){
                transactionHash = await transactionContract.setOwner(inputAddressOwner)
            
            } else if (name == "authorizeOperator") {
                transactionHash = await transactionContract.authorizeOperator(inputAddressOwner)

            } else if (name == "revokeOperator") {
                transactionHash = await transactionContract.revokeOperator(inputAddressOwner)

            } else if (name == "mintTokensToVault") {
                transactionHash = await transactionContract.mintTokensToVault(ethers.utils.parseUnits(inputAmountVault.toString(),"ether"))

            } else if (name == "operatorBurn") {
                transactionHash = await transactionContract.operatorBurn(vaultContract, ethers.utils.parseUnits(inputAmountVault.toString(),"ether"), "0x", "0x")

            } else if (name == "whitelistUsers") {
                transactionHash = await transactionContract.whitelistUsers(fileContentWhitelist.split(','))

            } else if (name == "removeFromWhitelist") {
                transactionHash = await transactionContract.removeFromWhitelist(fileContentWhitelist.split(','))

            } else if (name == "operatorSend") {
                transactionHash = await transactionContract.operatorSend(inputAddressOperatorSend, vaultContract, ethers.utils.parseUnits(inputAmountOperatorSend, "ether"), "0x", "0x")
            }
         

            setIsLoading(true);
            setReadMessage('Loading');
            await transactionHash.wait();
            setIsLoading(false);
            setReadMessage('Success - ' + transactionHash.hash);

        } catch (error) {
            console.log(error)
            setReadMessage('Fail: ' + error.message.substring(error.message.indexOf("execution reverted: ") + 20, error.message.indexOf(", method=")-1));
        }
    }


    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    window.ethereum.on('accountsChanged', async () => {
        checkIfWalletIsConnected()
    })

    return (
        <ContractContext.Provider 
        value={{ connectWallet, currentAccount, isLoading, formData, setFileContentMulti, setFileContentWhitelist, readMessage, handleChange, readFunction, writeFunction}
        }>
            { children }
        </ContractContext.Provider>
    )
}
