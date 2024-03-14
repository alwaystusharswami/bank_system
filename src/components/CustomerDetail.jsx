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
    <section className="m-5">
      <h1 className="text-3xl">
        Name : <span className="font-bold">{customer.name}</span>
      </h1>
      <p className="text-3xl">Email : {customer.email}</p>
      <h3 className="text-3xl">
        {" "}
        Amount : <span className="font-bold">
          {" "}
          {customer.currentBalance}{" "}
        </span>{" "}
      </h3>
      <h1 className="text-3xl font-bold italic my-5">Transfer Amount</h1>
      <div>
        <form className="flex flex-col items-start">
          <input
            className="placeholder:font-bold my-2 p-2 placeholder:text-gray-600"
            type="text"
            name="nameR"
            id="nameR"
            placeholder="receiver name"
          />
          <input
            className="placeholder:font-bold my-2 p-2 placeholder:text-gray-600"
            type="text"
            name="amount"
            id="amount"
            placeholder="amount"
          />{" "}
          <button type="submit" className="bg-fuchsia-700 text-white py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default CustomerDetail;
