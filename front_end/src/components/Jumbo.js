import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Jumbo() {
  return (
    <Jumbotron fluid className='bg-primary text-white'>
      <Container>
        <h1 className='text-white'>
          Software Engineer | React Developer | JavaScript Developer | Python
          Developer | Django Developer | Cool Guy
        </h1>
        <p>Open to opportunities in Web Development and Software Engineering</p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
