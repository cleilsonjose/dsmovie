import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to='/'>
            <h1>DSMovie</h1>
          </Link>

          <a href="https://github.com/cleilsonjose" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/cleilsonjose</p>
            </div>
          </a>
        </div>
      </nav>
    </header>

  );
}

export default NavBar;
