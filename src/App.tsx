import { Layout } from './core/components';
import { About } from './features/about/components';
import { Contact } from './features/contact/components';
import { Portfolio } from './features/portfolio/components';
import { Showcase } from './features/showcase/components';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Showcase />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  );
};

export default App;
