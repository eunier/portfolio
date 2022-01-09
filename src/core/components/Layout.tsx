import { styled } from '@linaria/react';
import { Children, ReactNode } from 'react';
import { Footer, Navbar } from '.';

export type LayoutProps = {
  children?: ReactNode;
};

const Spacer = styled.div`
  height: 5rem;
`;

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbarNavDropdown"
        data-bs-offset={-40}
        className="scrollspy-example"
        tabIndex={0}
      >
        {Children.map(props.children, child => (
          <>
            {child}
            <Spacer />
          </>
        ))}
      </div>

      <Footer />
    </>
  );
};
