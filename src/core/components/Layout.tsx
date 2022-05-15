import { styled } from '@linaria/react';
import { Toast } from 'bootstrap';
import { Children, ReactNode, useRef, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

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
      <div aria-live="polite" aria-atomic="true" className="position-relative">
        {/* Position it: */}
        {/* - `.toast-container` for spacing between toasts */}
        {/* - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner */}
        {/* - `.p-3` to prevent the toasts from sticking to the edge of the container  */}
        <div className="toast-container position-absolute top-0 end-0 p-3">
          {/* Then put toasts within */}
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            ref={submitToastEl}
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <div className="toast-body">See? Just like this.</div>
          </div>
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <img src="..." className="rounded me-2" alt="..." />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <div className="toast-body">
              Heads up, toasts will stack automatically
            </div>
          </div>
        </div>
      </div>

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
