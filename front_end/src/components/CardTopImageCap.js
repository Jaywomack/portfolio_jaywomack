import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTopImageCap(props) {
  return (
    <>
      <Card>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTopImageCap;
