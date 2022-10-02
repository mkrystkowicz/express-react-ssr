import React from 'react';
import styled from 'styled-components'

const Greeting = styled.h1`
  color: green;
`

const App = () => (
  <>
    <Greeting>Hello World</Greeting>
    <button onClick={e => alert('Hello You!')}>Say Hello Back!</button>
  </>
);

export default App;
