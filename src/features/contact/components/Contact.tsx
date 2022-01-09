import { init, send } from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Divider } from '../../../shared/components';

init('user_elG8VitBKKHbZSABXoEWX');

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    send(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID as string,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE as string,
      {
        name,
        email,
        phoneNumber,
        message,
      }
    )
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center text-uppercase">Contact Me</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Divider className="w-auto" />
      </div>

      <form ref={form} onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>

          <input
            type="email"
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
    </div>
  );
};
