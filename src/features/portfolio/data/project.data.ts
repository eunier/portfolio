import { Project } from '../models';

const { VITE_ASSETS_URL } = import.meta.env as ImportMetaEnv & {
  VITE_ASSETS_URL: string;
};

export const projects: Project[] = [
  {
    backgroundColor: 'bg-primary',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/></svg>',
    mediaSrc: `${VITE_ASSETS_URL}/devop-dashboard.png`,
    title: 'Devops Dashboard',
    description:
      "This is a React.js and Socket.io full-stack app. Backend generates random live data representing the status, memory, and CPU usage of applications. The front-end's state is managed with redux.",
    sourceCodeUrl: 'https://github.com/eunier/devop-dashboard',
  },
  {
    backgroundColor: 'bg-info',
    icon: 'bi-diagram-3',
    mediaSrc: `${VITE_ASSETS_URL}/dev-connector.png`,
    title: 'Social Network',
    description:
      'A social network for developers. Technologies and libraries: React.js, Express, MongoDB. Redux. This full-stack app allows the sign-up and sign-in of a new account and the creation of a profile listing all your educational and work history. And will enable the creation of discussions between other users.',
    deployedUrl: 'https://fathomless-taiga-68796.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/dev-connector',
  },
  {
    backgroundColor: 'bg-success',
    icon: 'bi-key',
    mediaSrc: `${VITE_ASSETS_URL}/random-password-generator.png`,
    title: 'Random Password Generator',
    description:
      'It allows the generation of random passwords based on different parameters, password length, lowercase, uppercase, numbers, and symbols.',
    deployedUrl: 'https://random-password-generator-ya.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/random-password-generator',
  },
  {
    backgroundColor: 'bg-danger',
    icon: 'bi-cloud-sun',
    mediaSrc: `${VITE_ASSETS_URL}/weather-app.gif`,
    title: 'Weather App',
    description:
      'This command app receives an address, search it with Google Geolocation api, and returns the current weather using the Dark Sky api.',
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
