import { init } from '@emailjs/browser';
import { useState } from 'react';
import { Divider } from '../../../shared/components';

init('user_elG8VitBKKHbZSABXoEWX');

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center text-uppercase">Contact Me</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Divider className="w-auto" />
      </div>

      <form>
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
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumberInput" className="form-label">
            Phone Number
          </label>

          <input type="tel" className="form-control" id="phoneNumberInput" />
        </div>

        <div className="mb-3">
          <label htmlFor="messageTextarea" className="form-label">
            Message
          </label>

          <textarea className="form-control" id="messageTextarea" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
