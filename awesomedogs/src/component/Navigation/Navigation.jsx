import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">History</Link>
    </nav>
  );
}

export default Navigation;
