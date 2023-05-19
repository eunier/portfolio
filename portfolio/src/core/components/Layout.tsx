import { styled } from '@linaria/react';
import { Children, ReactNode, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { Footer, Navbar } from '.';

export type LayoutProps = {
  children?: ReactNode;
};

const Spacer = styled.div`
  height: 5rem;
`;

export const Layout = (props: LayoutProps) => {
  const submitToastEl = useRef<HTMLDivElement>(null);

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

      {/* <div
        id="submitToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref={submitToastEl}
      >
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..." />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
        <div className="toast-body">{toastMst}</div>
      </div> */}
    </>
  );
};
