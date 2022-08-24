import { Link } from "react-router-dom"

const ContractNav = () => {
    return (
        <>
            <Link className="block p-4 overflow-hidden rounded-md hover:bg-gray-300" to="/vSYN2021" exact="true" > vSYN2021</Link>
            <Link className="block p-4 overflow-hidden rounded-md hover:bg-gray-300" to="/vSYN2022" exact="true"> vSYN2022</Link>
            <Link className="block p-4 overflow-hidden rounded-md hover:bg-gray-300" to="/vSYN2023" exact="true"> vSYN2023</Link>
            <Link className="block p-4 overflow-hidden rounded-md hover:bg-gray-300" to="/SYN" exact="true"> SYN</Link>   
        </>
    )
}

export default ContractNav
