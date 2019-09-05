import React from 'react';
import LiveCodeExample from './live-code-example';

const code = `
  /** Basic Styling **/
  
  const Button = styled.button\`
    color: hotpink;
    background-color: black;
    border: 1px solid hotpink;
    margin: 0 10px;
    padding: 10px 40px;
  \`

  const Container = styled.div(props => ({
    display: 'flex',
    backgroundColor: props.alert ? 'lightgreen' : 'transparent',
    flexDirection: props.column && 'column',
    padding: props.padding,
    justifyContent: 'center'
  }))

  render(
    <>
    <h1>emotion</h1>
    <Container padding={"15px"}>
      <Button>Continue</Button>
      <Button primary>Cancel</Button>
    </Container>
    </>
  )
`;

export default function() {
  return <LiveCodeExample code={code} />;
}
