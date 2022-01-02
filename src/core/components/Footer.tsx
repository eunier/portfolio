import { css } from '@linaria/core';
import { useState } from 'react';

type SocialLink = {
  name: string;
  url: string;
  icons: string;
};

const styles = css`
  .footer {
    &__socialLinks {
      column-gap: 1.5rem;
    }

    &__socialLinkBtn {
      width: 4rem;
      height: 4rem;
      border-width: 0.2rem;
      border-radius: 100%;
      display: grid;
      place-items: center;
    }
  }
`;

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/eunier',
    icons: 'bi-github',
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/yunieralvarez',
    icons: 'bi-linkedin',
  },
];

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className={`container-fluid ${styles}`}>
      <div className="row text-center text-white bg-secondary bg-opacity-75">
        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>Location</h2>
        </div>

        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>On The Web</h2>

          <div className="d-flex gx-5 mx-auto footer__socialLinks">
            {socialLinks.map((sl, idx) => (
              <a
                className="btn btn-outline-light footer__socialLinkBtn"
                key={idx}
              >
                <i className={`bi ${sl.icons} fs-2`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="row bg-secondary">
        <div className="col">
          <div className="text-center text-white mt-2 mb-2">
            &copy; {year} Yunier Alvarez Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};
