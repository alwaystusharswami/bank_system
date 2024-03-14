import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    async function showCustomer() {
      const response = await fetch(`http://localhost:8000/customer/${id}`);
      const data = await response.json();
      setCustomer(data);
    }
    showCustomer();
  });
  return (
    <>
      <h1>{customer.name}</h1>
      <p>{customer.email}</p>
      <h3> Amount : {customer.currentBalance} </h3>
      <button>Transfer Amount</button>
      <div>
        <form>
          <input type="text" placeholder="receiver name" />
          <input type="text" placeholder="enter amount" />
          <button type="submit">Send</button>

        </form>
      </div>
    </>
  );
};

export default CustomerDetail;
