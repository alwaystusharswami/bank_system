import { useState } from "react";
import Customer from "./Customer";
import { useEffect } from "react";

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function customerData() {
      const res = await fetch("http://localhost:8000/allCustomer");
      const data = await res.json();
      setCustomer(data);
      setLoading(false);
    }
    customerData();
  });
  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      {customer.map((user) => (
        <Customer user={user} key={user.id}/>
      ))}
    </div>
  );
};

export default CustomerList;
