
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>My Dashboard</h1>

      <nav>
        <Link to="/">Dashboard Home</Link>
        {" | "}
        <Link to="/settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Dashboard;
