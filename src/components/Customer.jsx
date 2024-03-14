/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Customer = ({ user }) => {
  return (
    <>
      <>
        <h1>
          <Link to={`/customer/${user._id}`}>{user.name}</Link>
        </h1>
      </>
    </>
  );
};

export default Customer;
