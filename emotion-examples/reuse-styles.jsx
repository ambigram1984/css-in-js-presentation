/* eslint-disable */
import React from 'react';
import LiveCodeExample from './live-code-example';

const code = `
/** Re-use style logic **/

const remToPx = (pixelVal) => \`\$\{pixelVal / 16\}rem\`

const goodAlert = css\`
  color: limegreen;
  font-weight: lighter;
\`;

const GoodHeader = styled.h1\`
  \$\{goodAlert\};
  font-size: \$\{remToPx(30)\};
\`;

const badAlert = (weight = 'bold') => ({
  color: 'tomato',
  fontWeight: weight,
});

const BadHeader = styled.h1({
  fontSize: remToPx(40),
  ...badAlert()
});

render(
  <>
    <GoodHeader>I'm a good header</GoodHeader>
    <BadHeader>I'm a bad header</BadHeader>
  </>
)
`;

export default () => <LiveCodeExample code={code} />;
