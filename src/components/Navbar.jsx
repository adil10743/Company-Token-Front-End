import logo from '../../images/Synpulse_LogoWithSpace_CMYK_(Vectors)_freigestellt ohne claim.png'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { ContractNav, ConnectButton, EthereumCard } from "../components"
import React, { useContext } from 'react';
import { ContractContext } from '../context/ContractContext';

const IconDownArrow = () => (
  <div>
    <Icon name='angle down' />
  </div>
)

const Navbar = () => {
    const { currentAccount } = useContext(ContractContext);

    return (
        <nav className="w-full">
            <div className="relative w-full flex space-x-2 justify-center items-center">
                <div className="flex-none flex justify-center items-center font-semibold">
                    <div className="flex pr-5">
                        <a href="https://www.synpulse.com/" target="_blank">
                            <img src={logo} alt="synpulse logo" className="w-52"/>
                        </a>
                    </div>
                    <ul className="invisible md:visible flex justify-center text-white text-xl flex-row list-none">
                        <span className="relative flex justify-center min-w-[100px] hover:bg-pink-800 pl-5 pr-5 pb-10 pt-10">
                            <button className="peer flex justify-center">
                                Contract
                                <div><i aria-hidden="true" className="angle down icon"></i></div>
                            </button>
                            <div className="absolute hidden peer-hover:flex hover:flex rounded-md cursor-pointer flex-col bg-gray-100 text-black text-base drop-shadow-2xl left-5 top-16">
                                <ContractNav />
                            </div>
                        </span>
                        <span className="flex justify-center min-w-[100px] hover:bg-emerald-500 pl-5 pr-5 pb-10 pt-10">
                            <a href="https://spextranet.sharepoint.com/sites/SynpulseToken" target="_blank" className="hover:text-white">
                                <span>Sharepoint</span>
                            </a>
                        </span>
                        <span className="flex justify-center min-w-[100px] hover:bg-orange-600 pl-5 pr-5 pb-10 pt-10">
                            <a href="https://spextranet.sharepoint.com/sites/SynpulseToken/SitePages/Tokenomics.aspx" target="_blank" className="hover:text-white">
                                <span>About</span>  
                            </a> 
                        </span>
                    </ul>
                </div>
                <div className="absolute flex-none flex items-center p-10 text-white right-0">
                    { !currentAccount ? <ConnectButton/> : <EthereumCard currentAccount={currentAccount} />}
                </div>
            </div>
        </nav>
    )   
}

export default Navbar