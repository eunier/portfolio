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
    icon: 'bi-house',
  },
  {
    name: 'about',
    icon: 'bi-house',
  },
  {
    name: 'contact',
    icon: 'bi-house',
  },
];

export const Navbar = () => {
  const [activeNavLinkIdx, setActiveNavLinkIdx] = useState(navLinkNames[0]);

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
                    active: el.name === activeNavLinkIdx.name,
                  })}
                  href={`#${el.name}`}
                  onClick={() => setActiveNavLinkIdx(el)}
                  aria-current={
                    el.name === activeNavLinkIdx.name ? 'page' : undefined
                  }
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
