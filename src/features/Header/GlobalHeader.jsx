import "../../styles/GlobalHeader.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const GlobalHeader = () => {
  const count = useSelector((state) => state.home.counter);
  return (
    <header className="global-header">
      <div className="logo">Your App Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {count}
      {/* Additional elements (search bar, user profile, etc.) */}
    </header>
  );
};

export default GlobalHeader;
