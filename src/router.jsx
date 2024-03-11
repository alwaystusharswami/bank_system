import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./page";
import { CustomerDetail } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "customer/:id", element: <CustomerDetail/> },
    ],
  },
]);
export { router };
