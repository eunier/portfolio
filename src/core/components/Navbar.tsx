import classNames from 'classnames';
import { useState } from 'react';

const navLinkNames = ['home', 'portfolio', 'about', 'contact'];

export const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState(navLinkNames[0]);

  return (
    <nav
      className={classNames(
        'navbar navbar-expand-sm sticky-top navbar-dark bg-secondary'
      )}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav nav-pills ms-auto text-uppercase fw-bold">
            {navLinkNames.map((el, idx) => (
              <li key={idx} className="nav-item">
                <a
                  className={classNames('nav-link mx-1 px-2', {
                    active: el === activeNavLink,
                  })}
                  href={`#${el}`}
                  onClick={() => setActiveNavLink(el)}
                  aria-current={el === activeNavLink ? 'page' : undefined}
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
