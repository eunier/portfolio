import { css } from '@linaria/core';
import { Children, ReactNode } from 'react';
import { Footer, Navbar } from '.';

export type LayoutProps = {
  children?: ReactNode;
};

const styles = {
  spacer: css`
    height: 5rem;
  `,
};

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />

      {Children.map(props.children, child => (
        <>
          {child}
          <div className={styles.spacer}></div>
        </>
      ))}

      <Footer />
    </>
  );
};
