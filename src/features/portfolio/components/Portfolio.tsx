import { useState } from 'react';
import { ProjectCard, ProjectModal } from '.';
import avatarImage from '../../../assets/avatar.png';
import devopsDashboardImage from '../../../assets/devops-dashboard.png';
import randomPasswordGeneratorImage from '../../../assets/random-password-generator.png';
import socialNetworkImage from '../../../assets/social-network.jpg';
import weatherAppImage from '../../../assets/weather-app.png';
import { Divider } from '../../../shared/components';
import { Project } from '../models/project.model';

const projects: Project[] = [
  {
    backgroundColor: 'bg-primary',
    icon: 'bi-graph-up',
    imgSrc: devopsDashboardImage,
    title: 'Devops Dashboard',
    description: 'React.js and Socket.io full stack app',
    url: 'https://github.com/eunier/devop-dashboard',
  },
  {
    backgroundColor: 'bg-secondary',
    icon: 'bi-diagram-3',
    imgSrc: socialNetworkImage,
    title: 'Social Network',
    description: 'description here',
    url: 'https://fathomless-taiga-68796.herokuapp.com/',
  },
  {
    backgroundColor: 'bg-success',
    icon: 'bi-key',
    imgSrc: randomPasswordGeneratorImage,
    title: 'Random Password Generator',
    description: 'description here',
    url: 'https://random-password-generator-ya.herokuapp.com/',
  },
  {
    backgroundColor: 'bg-danger',
    icon: 'bi-cloud-sun',
    imgSrc: weatherAppImage,
    title: 'Weather App',
    description: 'description here',
    url: 'https://github.com/eunier/weather-app',
  },
  {
    backgroundColor: 'bg-warning',
    icon: 'bi-tools',
    imgSrc: '',
    title: 'Bootstrap Utilities Generator',
    description: 'description here',
    url: 'https://github.com/eunier/eunier-workspace/tree/npm/libs/bs-utils',
  },
  {
    backgroundColor: 'bg-info',
    icon: 'bi-graph-up',
    imgSrc: avatarImage,
    title: 'avatar',
    description: 'description here',
    url: 'https://github.com/eunier/todo',
  },
  {
    backgroundColor: 'bg-primary',
    icon: 'bi-graph-up',
    imgSrc: avatarImage,
    title: 'avatar',
    description: 'description here',
    url: 'https://github.com/eunier/video-request',
  },
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined
  );

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center text-uppercase">Portfolio</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Divider className="w-auto" />
      </div>

      <div className="container">
        <div className="row">
          {projects.map((p, idx) => (
            <div
              className="col-md-4 col-sm-6 gx-4 gy-4"
              key={idx}
              data-bs-toggle="modal"
              data-bs-target="#projectModal"
              role="button"
              aria-label="Open project modal"
              onClick={() => setSelectedProject(p)}
            >
              <ProjectCard
                className={p.backgroundColor}
                icon={p.icon}
                title={p.title}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        title={selectedProject?.title ?? ''}
        imgSrc={selectedProject?.imgSrc ?? ''}
        description={selectedProject?.description ?? ''}
      />
    </div>
  );
};
