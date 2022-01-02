import { styled } from '@linaria/react';
import classNames from 'classnames';
import { Project } from '../models';

export type ProjectCardProps = Pick<Project, 'icon' | 'title'> & {
  className?: string;
};

const ProjectCardStyles = styled.div`
  .project-card {
    &__icon {
      font-size: 8rem;
    }

    &__title-wrapper {
      height: 3rem;
    }

    &__title {
      height: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <ProjectCardStyles className={classNames('card', props.className)}>
      <div className="card-img-top d-flex justify-content-center">
        <i className={classNames('bi', props.icon, 'project-card__icon')}></i>
      </div>

      <div className="card-body">
        <h5 className="card-title project-card__title-wrapper">
          <div className="project-card__title">{props.title}</div>
        </h5>
      </div>
    </ProjectCardStyles>
  );
};
