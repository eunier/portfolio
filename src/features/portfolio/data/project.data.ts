import avatarImage from '../../../assets/avatar.png';
import devopsDashboardImage from '../../../assets/devops-dashboard.png';
import randomPasswordGeneratorImage from '../../../assets/random-password-generator.png';
import socialNetworkImage from '../../../assets/social-network.jpg';
import weatherAppImage from '../../../assets/weather-app.png';

export const projects: Project[] = [
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
