import { css } from '@linaria/core';
import classNames from 'classnames';
import { useState } from 'react';

type SocialLink = {
  name: string;
  url: string;
  icons: string;
};

const styles = {
  footer__socialLinks: css`
    column-gap: 1.5rem;
  `,
  footer_socialLinkBtn: css`
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
  `,
};

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
    <div className="container-fluid ">
      <div className="row text-center text-white bg-secondary bg-opacity-75">
        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>Location</h2>
        </div>

        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>On The Web</h2>

          <div className={`d-flex gx-5 mx-auto ${styles.footer__socialLinks}`}>
            {socialLinks.map(sl => (
              <a
                className={classNames(
                  'btn btn-outline-light',
                  styles.footer_socialLinkBtn
                )}
              >
                <i className={`bi ${sl.icons} fs-1`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="row bg-secondary">
        <div className="col">
          <p className="text-center text-white mt-2 mb-2">
            &copy; {year} Yunier Alvarez Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};
