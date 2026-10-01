import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>{" \ "}
        <Link to="/students">Students</Link>{" \ "}
        <Link to="/add-student">Add Student</Link>{" \ "}
        <Link to="/about">About</Link>{" \ "}
        <Link to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;