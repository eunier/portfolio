// import { Layout } from './core/components';
// import { About } from './features/about/components';
// import { Contact } from './features/contact/components';
// import { Portfolio } from './features/portfolio/components';
// import { Showcase } from './features/showcase/components';
import { css } from '@emotion/react';
import { useState } from 'react';
const styles = css`
  background-color: #5f16a3;
`;

const styels2 = css`
  ${styles}
  color: hotpink;
`;

const testStyles = {
  main: css`
    background-color: #16a31d;
  `,
  get nested() {
    return css`
      color: hotpink;
    `;
  },
  height: ({ num }: { num: number }) => css`
    height: ${num}rem;
    background-color: darkslategray;
  `,
};

const App = (): JSX.Element => {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      {/* <div css={styles}>test</div>
      <div css={styels2}>test2</div> */}

      {/* <div css={testStyles.main}>1</div>
      <div css={testStyles.nested}>2</div> */}
      <button onClick={() => setCnt(prev => prev + 1)}>+</button>
      <div css={testStyles.main}>
        3<div css={testStyles.nested}>4</div>
      </div>

      <p css={testStyles.height({ num: cnt })}>test</p>
    </div>
    // <Layout>
    //   <Showcase />
    //   <Portfolio />
    //   <About />
    //   <Contact />
    // </Layout>
  );
};

export default App;
