import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div className="header">
    <div>
    <a href="/"><img src="robotics.png" alt="Logo" className="logo" /></a>
    </div>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/team">Team</a></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    );
};

export default Header;