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

      {Children.map(props.children, child => (
        <>
          {child}
          <Spacer />
        </>
      ))}

      <Footer />
    </>
  );
};
