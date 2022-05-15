import { styled } from '@linaria/react';
import { Toast } from 'bootstrap';
import { Children, ReactNode, useRef } from 'react';
import { Footer, Navbar } from '.';

export type LayoutProps = {
  children?: ReactNode;
  render: (obj: { showToast: (msg: string) => void }) => ReactNode;
};

const Spacer = styled.div`
  height: 5rem;
`;

export const Layout = (props: LayoutProps) => {
  const submitToastEl = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    if (submitToastEl.current) {
      const toast = new Toast(submitToastEl.current);
      toast.show();
    }
  };

  const test = props.render({ showToast });

  // console.log(test);

  return (
    <>
      <Navbar />

      {/* <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset={0}
        className="scrollspy-example"
        tabIndex={0}
      > */}
      {/* {Children.map(props.children, child => (
        <>
          {child}
          <Spacer />
        </>
      ))} */}
      {/* {props.render({ showToast })} */}

      {Children.map(props.render({ showToast }), child => (
        <>
          {child}
          <Spacer />
        </>
      ))}

      {/* </div> */}

      <Footer />

      <div
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
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </>
  );
};
