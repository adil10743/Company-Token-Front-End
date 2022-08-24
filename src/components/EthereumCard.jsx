import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const IconDownArrow = () => (
    <div>
      <Icon name='ethereum' />
    </div>
  )

const EthereumCard = ({currentAccount}) => {
    const displayAccount = currentAccount.toString().substring(0,4) + " ... " + currentAccount.toString().slice(-4);
    return (
        <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-400"></div>
            <button className="peer flex justify-center items-center rounded-xl text-black eth-card white-glassmorphism p-1 w-40"
                    onClick={() => {
                        console.log(currentAccount)
                        navigator.clipboard.writeText(currentAccount)}}>
                <div className="w-7 h-7 rounded-full border-2 border-white">
                    <div><i aria-hidden="true" className="relative ethereum icon text-white left-0.5"></i></div>
                </div>
                <div className="pl-2">
                    {displayAccount}
                </div>

            </button>
            <div className="absolute hidden peer-hover:flex rounded-md cursor-pointer flex-col bg-white text-black text-base drop-shadow-2xl left-5 top-10 p-1">
                Copy to Clipboard
            </div>
        </div>
    )
}

export default EthereumCard