import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./page";
const router = createBrowserRouter([
  { path: "/", element: <App />, children: [{ path: "", element: <Home /> }] },
]);
export { router };
