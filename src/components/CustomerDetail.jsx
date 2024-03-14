import { Link, useParams } from "react-router-dom";
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
    <div>
      <h1>{customer.name}</h1>
      <p>{customer.email}</p>
      <h3> Amount : {customer.currentBalance} </h3>
      <p><Link>Send Money</Link></p>
    </div>
  );
};

export default CustomerDetail;
