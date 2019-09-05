import React from 'react';
import LiveCodeExample from './live-code-example';

const code = `
/** Cascade Example **/

const Example = styled('span')\`
    color: lightgreen;
    display: block;
    & > a {
        color: hotpink;
    }
    & > span:nth-child(odd) {
        color: cyan;
    }
    & > span:last-child {
        color: deeppink;
    }
\`

render(
  <>
  <Example>
    This is <a>nested</a>.
  </Example>
  <Example>
    <span>With</span> great power comes great <span>responsbility</span>
  </Example>
  </>
)
`;

export default function() {
  return <LiveCodeExample code={code} />;
}
