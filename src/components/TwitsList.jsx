import React, { useContext, useEffect } from 'react';
import { twitsContext } from './TwitsContext';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TwitsList = () => {
  const { twits, getTwits } = useContext(twitsContext);

  useEffect(() => {
    getTwits();
  }, []);

  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-between flex-wrap mt-5">
      {twits.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{item.author}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              Details
            </Button>
          </Card.Body>
          <Card.Img variant="bottom" src={item.image} />
        </Card>
      ))}
    </Container>
  );
};

export default TwitsList;
