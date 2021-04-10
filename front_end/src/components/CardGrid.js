import React from 'react';
import CardTopImageCap from './CardTopImageCap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import codeImage from '../images/code.jpeg';

function CardGrid() {
  return (
    <Row>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
      <Col xs={12} md={4} lg={3}>
        <CardTopImageCap
          image={codeImage}
          title='This is the project title'
          text='This is the text'
        />
      </Col>
    </Row>
  );
}

export default CardGrid;
