import devopsDashboard from '../../../assets/devops-dashboard-demo.gif';
import randomPasswordGeneratorImage from '../../../assets/random-password-generator.png';
import socialNetworkImage from '../../../assets/social-network.jpg';
import weatherAppImage from '../../../assets/weather-app.png';
import { Project } from '../models';

export const projects: Project[] = [
  {
    backgroundColor: 'bg-primary',
    icon: 'bi-graph-up',
    mediaSrc: devopsDashboard,
    title: 'Devops Dashboard',
    description:
      "This is a React.js and Socket.io full-stack app. Backend generates random live data representing the status, memory, and CPU usage of applications. The front-end's state is managed with redux.",
    sourceCodeUrl: 'https://github.com/eunier/devop-dashboard',
  },
  {
    backgroundColor: 'bg-secondary',
    icon: 'bi-diagram-3',
    mediaSrc: socialNetworkImage,
    title: 'Social Network',
    description: 'description here',
    deployedUrl: 'https://fathomless-taiga-68796.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/dev-connector',
  },
  {
    backgroundColor: 'bg-success',
    icon: 'bi-key',
    mediaSrc: randomPasswordGeneratorImage,
    title: 'Random Password Generator',
    description: 'description here',
    deployedUrl: 'https://random-password-generator-ya.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/random-password-generator',
  },
  {
    backgroundColor: 'bg-danger',
    icon: 'bi-cloud-sun',
    mediaSrc: weatherAppImage,
    title: 'Weather App',
    description: 'description here',
    sourceCodeUrl: 'https://github.com/eunier/weather-app',
  },
  // {
  //   backgroundColor: 'bg-warning',
  //   icon: 'bi-tools',
  //   mediaSrc: '',
  //   title: 'Bootstrap Utilities Generator',
  //   description: 'description here',
  //   url: 'https://github.com/eunier/eunier-workspace/tree/npm/libs/bs-utils',
  // },
  // {
  //   backgroundColor: 'bg-info',
  //   icon: 'bi-graph-up',
  //   mediaSrc: avatarImage,
  //   title: 'avatar',
  //   description: 'description here',
  //   url: 'https://github.com/eunier/todo',
  // },
  // {
  //   backgroundColor: 'bg-primary',
  //   icon: 'bi-graph-up',
  //   mediaSrc: avatarImage,
  //   title: 'avatar',
  //   description: 'description here',
  //   url: 'https://github.com/eunier/video-request',
  // },
];
