import TokenLogo from '../../images/logo.png'
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="p-6">
            <div className="bg-white">
                <div className="w-full flex justify-center items-center">
                    <Link to="/" exact="true">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl pt-2 pb-2 hover:text-black">
                            Token Management Dashboard
                        </h1>
                    </Link>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src={TokenLogo} alt="Token Logo" className="h-20 sm:h-28 md:h-40" />
                </div>
                <div className="w-full flex justify-center items-center relative -top-5 font-bold">One Spirit Inititiative</div>
            </div>
          
        </div>
    )
}

export default Welcome