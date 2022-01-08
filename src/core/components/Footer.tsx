import { styled } from '@linaria/react';
import { useState } from 'react';
import { socialLinks } from '../data';

const SocialLinks = styled.div`
  column-gap: 1.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const SocialLinkBtn = styled.a`
  border-radius: 100%;
  border-width: 0.2rem;
  display: grid;
  height: 4.5rem;
  place-items: center;
  width: 4.5rem;
`;

const SocialLinkIcon = styled.i`
  font-size: 2rem;
`;

const CopyRight = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="container-fluid">
      <div className="row text-center text-white bg-secondary bg-opacity-75">
        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>Location</h2>

          <p>Miami-Fort Lauderdale Area, USA, Florida</p>
        </div>

        <div className="col-lg-6 col-md-12 mt-4 mb-4">
          <h2>On The Web</h2>

          <SocialLinks>
            {socialLinks.map((sl, idx) => (
              <SocialLinkBtn
                className="btn btn-outline-light"
                key={idx}
                href={sl.url}
                target="_blank"
              >
                <SocialLinkIcon className={`bi ${sl.icons}`}></SocialLinkIcon>
              </SocialLinkBtn>
            ))}
          </SocialLinks>
        </div>
      </div>

      <div className="row bg-secondary">
        <div className="col">
          <CopyRight>&copy; {year} Yunier Alvarez Portfolio</CopyRight>
        </div>
      </div>
    </div>
  );
};
