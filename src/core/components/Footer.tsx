import { styled } from '@linaria/react';
import { useState } from 'react';
import { socialLinks } from '../data';

const FooterStyles = styled.div`
  .social-links {
    column-gap: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .socialLink-btn {
    border-radius: 100%;
    border-width: 0.2rem;
    display: grid;
    height: 4.5rem;
    place-items: center;
    width: 4.5rem;
  }

  .social-link-icon {
    font-size: 2rem;
  }

  .copy-right {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <FooterStyles className="container-fluid">
      <div className="row text-center text-white bg-secondary bg-opacity-75">
        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>Location</h2>

          <p>Miami-Fort Lauderdale Area, USA, Florida</p>
        </div>

        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>On The Web</h2>

          <div className="social-links">
            {socialLinks.map((sl, idx) => (
              <a
                className="btn btn-outline-light socialLink-btn"
                key={idx}
                href={sl.url}
                target="_blank"
              >
                <i className={`social-link-icon bi ${sl.icons}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="row bg-secondary">
        <div className="col">
          <div className="copy-right">
            &copy; {year} Yunier Alvarez Portfolio
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};
