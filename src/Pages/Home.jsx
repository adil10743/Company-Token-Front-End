import {ContractNav, Welcome } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-company-background bg-cover justify-between">
      <div className="p-28"></div>
      <div className="relative w-full flex justify-center p-2">
        <div className="peer peer-hover:text-blue-500 space-x-2 animate-pulse text-3xl cursor-default">
            Please select a contract
            <div className="inline-block"><i aria-hidden="true" class="angle down large icon"></i></div>
        </div>
        <div className="absolute hidden peer-hover:flex hover:flex bg-transparent text-black text-base top-10 p-2">
          <div className="flex flex-row rounded-md bg-white">
            <ContractNav />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
 