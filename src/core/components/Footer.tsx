import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useState } from 'react';
import './Footer.module.css';

type SocialLink = {
  name: string;
  url: string;
  icons: string;
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

const footer = css`
  .footer {
    &__social-links {
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      column-gap: 1.5rem;
    }

    &__socialLink-btn {
      width: 4.5rem;
      height: 4.5rem;
      border-width: 0.2rem;
      border-radius: 100%;
      display: grid;
      place-items: center;
    }

    &__social-link-icon {
      font-size: 2rem;
    }
  }
`;

const FooterStyles = styled.div`
  .footer {
    &__social-links {
      column-gap: 1.5rem;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    &__socialLink-btn {
      border-radius: 100%;
      border-width: 0.2rem;
      display: grid;
      height: 4.5rem;
      place-items: center;
      width: 4.5rem;
    }

    &__social-link-icon {
      font-size: 2rem;
    }

    &__copy-right {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <FooterStyles className="container-fluid">
      <div className="row text-center text-white bg-secondary bg-opacity-75">
        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>Location</h2>
        </div>

        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>On The Web</h2>

          <div className="footer__social-links">
            {socialLinks.map((sl, idx) => (
              <a
                className="btn btn-outline-light footer__socialLink-btn"
                key={idx}
              >
                <i className={`footer__social-link-icon bi ${sl.icons}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="row bg-secondary">
        <div className="col">
          <div className="footer__copy-right text-center">
            &copy; {year} Yunier Alvarez Portfolio
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};
