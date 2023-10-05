import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Sky Films</h1>
      <ul>
        <li>
          <Link to="/">Popular</Link>
        </li>
        <li>
          <Link to="/coming-soon">Coming Soon</Link>
        </li>
        <li>
          <Link to="/now-playing">Now Playing</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
