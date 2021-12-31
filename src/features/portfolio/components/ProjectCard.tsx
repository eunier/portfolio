import { css } from '@linaria/core';
import classNames from 'classnames';
import { Project } from '../models';

export type ProjectCardProps = Pick<Project, 'icon' | 'title'> & {
  className?: string;
};

const styles = {
  icon: css`
    font-size: 8rem;
  `,
  titleH5: css`
    height: 3rem;
  `,
  titleDiv: css`
    height: 2rem;
  `,
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className={classNames('card', props.className)}>
      <div className="card-img-top d-flex justify-content-center">
        <i className={classNames('bi', props.icon, styles.icon)}></i>
      </div>

      <div className="card-body">
        <h5 className={classNames('card-title text-uppercase', styles.titleH5)}>
          <div className={classNames('text-center', styles.titleDiv)}>
            {props.title}
          </div>
        </h5>
      </div>
    </div>
  );
};
