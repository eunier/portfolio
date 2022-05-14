import classNames from 'classnames';
import { Project } from '../models';

export type ProjectModalProps = Pick<
  Project,
  'title' | 'mediaSrc' | 'description' | 'deployedUrl' | 'sourceCodeUrl'
>;

export const ProjectModal = (props: ProjectModalProps) => (
  <div
    className="modal fade"
    id="projectModal"
    tabIndex={-1}
    aria-labelledby="projectModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header border-bottom-0">
          <h5
            className="modal-title w-100 text-center text-uppercase"
            id="projectModalLabel"
          >
            {props.title}
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div className="modal-body text-center">
          {props.mediaSrc && (
            <img
              src={props.mediaSrc}
              className="img-fluid"
              alt="Project preview"
            ></img>
          )}

          <p>{props.description}</p>

          <p>
            {props.deployedUrl && (
              <a
                className="link-primary"
                href={props.deployedUrl}
                target="_blank"
              >
                Go to Site
              </a>
            )}
          </p>

          <p>
            {props.sourceCodeUrl && (
              <a
                className="link-primary"
                href={props.sourceCodeUrl}
                target="_blank"
              >
                Go to Source Code
              </a>
            )}
          </p>
        </div>

        <div
          className={classNames(
            'modal-footer border-top-0 d-flex justify-content-center'
          )}
        >
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
