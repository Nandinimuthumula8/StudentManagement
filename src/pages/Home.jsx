import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Welcome to StudentHub</h1>
      <p>
        A Simple Student Management Application
      </p>
      <p>
        Manage student information easily and efficiently.
      </p>
      <Link to="/students">
        <button>
          View Students
        </button>
      </Link>
    </div>
  );
}
export default Home;