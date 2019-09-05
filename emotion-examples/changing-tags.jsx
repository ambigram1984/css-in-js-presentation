import React from 'react';
import LiveCodeExample from './live-code-example';

const code = `

  /** Change Tags **/

  const Header = styled.h1\`
  font-size: 40px;
  color: fuchsia;
\`

render(
  <Header
    as="span"
  >
    Emotion on GitHub
  </Header>
)
`;

export default () => <LiveCodeExample code={code} />;
