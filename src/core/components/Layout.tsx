import { styled } from '@linaria/react';
import { Children, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster position="top-right" />
      <Navbar />

      {/* <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset={0}
        className="scrollspy-example"
        tabIndex={0}
      > */}
      {Children.map(props.children, child => (
        <>
          {child}
          <Spacer />
        </>
      ))}
      {/* </div> */}

      <Footer />
    </>
  );
};
