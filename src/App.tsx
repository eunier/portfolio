import { Layout } from './core/components';
import { About } from './features/about/components';
import { Contact } from './features/contact/components';
import { Portfolio } from './features/portfolio/components';
import { Showcase } from './features/showcase/components';

const App = (): JSX.Element => {
  return (
    <Layout
      render={props => (
        <>
          <Showcase />
          <Portfolio />
          <About />
          <Contact showToast={props.showToast} />
        </>
      )}
    />
  );
};

export default App;
