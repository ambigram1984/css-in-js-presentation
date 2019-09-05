import React from 'react';
import LiveCodeExample from './live-code-example';

const code = `
/** Gloabl Styles **/

render(
  <>
    <Global styles={css\`
        * {
          color: green;
        }
      \`} />
        <h1>global</h1>
        <h2>styles</h2>
        <h3>are</h3>
        <h4>rad</h4>
  </>
)
`;

export default () => <LiveCodeExample code={code} />;
