import { Welcome, Services, SYN_Services } from '../components';

const Contract = ({year}) => {
  return (
    <div className="min-h-screen bg-company-background bg-cover justify-between">
      <Welcome />
      {year=="SYN" ? (<SYN_Services year={year} />) : (<Services year={year} />)}   
    </div>
  )
}
export default Contract
