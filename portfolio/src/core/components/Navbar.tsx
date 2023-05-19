import classNames from 'classnames';
import { useState } from 'react';

type NavLink = {
  name: string;
  icon: string;
};

const { VITE_ASSETS_URL } = import.meta.env as ImportMetaEnv & {
  VITE_ASSETS_URL: string;
};

const navLinkNames: NavLink[] = [
  {
    name: 'home',
    icon: `${VITE_ASSETS_URL}/home.svg`,
  },
  {
    name: 'portfolio',
    icon: `${VITE_ASSETS_URL}/briefcase.svg`,
  },
  // {
  //   name: 'about',
  //   icon: 'bi-file-person',
  // },
  {
    name: 'contact',
    icon: `${VITE_ASSETS_URL}/envelope.svg`,
  },
];

export const Navbar = () => {
  const [activeNavLinkIdx, setActiveNavLinkIdx] = useState(0);

  return (
    <nav
      className={classNames(
        'navbar navbar-expand-sm sticky-top navbar-dark bg-secondary'
      )}
      id="navbar"
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
                  <img
                    style={{ marginRight: '0.5rem', height: '1.5rem' }}
                    src={el.icon}
                  ></img>
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
