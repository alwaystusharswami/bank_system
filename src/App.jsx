import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="bg-teal-300 h-screen">
      <Outlet />
    </div>
  );
}

export default App
