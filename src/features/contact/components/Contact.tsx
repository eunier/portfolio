import { init, send } from '@emailjs/browser';
import { Toast } from 'bootstrap';
import { pipe } from 'fp-ts/lib/function';
import * as TE from 'fp-ts/lib/TaskEither';
import { useRef, useState } from 'react';
import { Divider } from '../../../shared/components';

init(import.meta.env.VITE_USER_ID as string);
export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const submitToastEl = useRef<HTMLDivElement>(null);

  const handleOnSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (submitToastEl.current) {
      const toast = new Toast(submitToastEl.current);
      toast.show();
    }

    const {
      env: { VITE_EMAIL_JS_SERVICE_ID, VITE_EMAIL_JS_TEMPLATE },
    } = import.meta;

    pipe(
      TE.tryCatch(
        () =>
          send(
            VITE_EMAIL_JS_SERVICE_ID!.toString(),
            VITE_EMAIL_JS_TEMPLATE!.toString(),
            {
              name,
              email,
              phoneNumber,
              message,
            }
          ),
        console.error
      )
    )();
  };

  return (
    <section className="container" id="contact">
      <div className="row">
        <h1
          className="text-center text-uppercase"
          // TODO remove after remove bootstrap
          style={{ marginTop: '54px' }}
        >
          Contact Me
        </h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Divider className="w-auto" />
      </div>

      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="emailHelp"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumberInput" className="form-label">
            Phone Number
          </label>

          <input
            type="tel"
            className="form-control"
            id="phoneNumberInput"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="messageTextarea" className="form-label">
            Message
          </label>

          <textarea
            className="form-control"
            id="messageTextarea"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

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
    </section>
  );
};
