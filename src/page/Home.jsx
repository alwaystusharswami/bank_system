import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1><Link to={'viewCustomer'}>View Customer</Link></h1>
      <h1>
        <Link to={"transferMoneyPage"}>Transfer Money</Link>
      </h1>
    </div>
  );
};

export default Home;
