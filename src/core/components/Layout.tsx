import { styled } from '@linaria/react';
import { Toast } from 'bootstrap';
import { Children, ReactNode, useRef, useState } from 'react';
import { Footer, Navbar } from '.';

export type LayoutPropsRenderProps = {
  showToast: (msg: string) => void;
};

export type LayoutProps = {
  children?: ReactNode;
  render: (props: LayoutPropsRenderProps) => ReactNode;
};

const Spacer = styled.div`
  height: 5rem;
`;

export const Layout = (props: LayoutProps) => {
  const submitToastEl = useRef<HTMLDivElement>(null);
  const [toastMst, setToastMst] = useState('');

  const showToast = (msg: string) => {
    setToastMst(msg);

    if (submitToastEl.current) {
      const toast = new Toast(submitToastEl.current);
      toast.show();
    }
  };

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

      {Children.map(props.render({ showToast }), child => (
        <>
          {child}
          <Spacer />
        </>
      ))}

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
        <div className="toast-body">{toastMst}</div>
      </div>
    </>
  );
};
