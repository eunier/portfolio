import classNames from 'classnames';
import { useState } from 'react';

type NavLink = {
  name: string;
  icon: string;
};

const navLinkNames: NavLink[] = [
  {
    name: 'home',
    icon: 'bi-house',
  },
  {
    name: 'portfolio',
    icon: 'bi-briefcase',
  },
  {
    name: 'about',
    icon: 'bi-file-person',
  },
  {
    name: 'contact',
    icon: 'bi-envelope',
  },
];

export const Navbar = () => {
  const [activeNavLinkIdx, setActiveNavLinkIdx] = useState(0);

  return (
    <nav
      className={classNames(
        'navbar navbar-expand-sm sticky-top navbar-dark bg-secondary'
      )}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
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
          <ul className="navbar-nav nav-pills text-uppercase fw-bold">
            {navLinkNames.map((el, idx) => (
              <li key={idx} className="nav-item">
                <a
                  className={classNames('nav-link mx-1 px-2', {
                    active: idx === activeNavLinkIdx,
                  })}
                  href={`#${el.name}`}
                  onClick={() => setActiveNavLinkIdx(idx)}
                  aria-current={idx === activeNavLinkIdx ? 'page' : undefined}
                >
                  <i className={`bi ${el.icon} pe-2`}></i>
                  {el.name}
                </a>
              </li>
            ))}
          </ul>

          <hr className="d-md-none text-white-50" />

          <div className="navbar-nav f"></div>
        </div>
      </div>
    </nav>
  );
};
