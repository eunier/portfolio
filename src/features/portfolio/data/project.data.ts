import { Project } from '../models';

const { VITE_ASSETS_URL } = import.meta.env as ImportMetaEnv & {
  VITE_ASSETS_URL: string;
};

export const projects: Project[] = [
  {
    backgroundColor: 'bg-primary',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/></svg>',
    mediaSrc: `${VITE_ASSETS_URL}/devops-dashboard-demo.gif`,
    title: 'Devops Dashboard',
    description:
      "This is a React.js and Socket.io full-stack app. Backend generates random live data representing the status, memory, and CPU usage of applications. The front-end's state is managed with redux.",
    sourceCodeUrl: 'https://github.com/eunier/devop-dashboard',
  },
  {
    backgroundColor: 'bg-info',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/></svg>',
    mediaSrc: `${VITE_ASSETS_URL}/dev-connector.png`,
    title: 'Social Network',
    description:
      'A social network for developers. Technologies and libraries: React.js, Express, MongoDB. Redux. This full-stack app allows the sign-up and sign-in of a new account and the creation of a profile listing all your educational and work history. And will enable the creation of discussions between other users.',
    deployedUrl: 'https://fathomless-taiga-68796.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/dev-connector',
  },
  {
    backgroundColor: 'bg-success',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16"><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/></svg>',
    mediaSrc: `${VITE_ASSETS_URL}/random-password-generator.png`,
    title: 'Random Password Generator',
    description:
      'It allows the generation of random passwords based on different parameters, password length, lowercase, uppercase, numbers, and symbols.',
    deployedUrl: 'https://random-password-generator-ya.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/eunier/random-password-generator',
  },
  {
    backgroundColor: 'bg-danger',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/><path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/></svg>',
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
