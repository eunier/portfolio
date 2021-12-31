import { Divider } from '../../../shared/components';

export const Contact = () => {
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
          <label htmlFor="firstNameInput" className="form-label">
            First Name
          </label>

          <input
            type="email"
            className="form-control"
            id="firstNameInput"
            aria-describedby="emailHelp"
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
