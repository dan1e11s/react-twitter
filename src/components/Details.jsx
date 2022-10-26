import React, { useContext, useEffect } from 'react';
import { twitsContext } from './TwitsContext';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Details = () => {
  const { oneTwit, getOneTwit, deleteTwit } = useContext(twitsContext);

  const { id } = useParams();

  useEffect(() => {
    getOneTwit(id);
  }, []);

  return oneTwit ? (
    <div
      style={{ width: '250px', border: '1px solid black', borderRadius: '8px' }}
      className="mx-auto mt-5 p-3"
    >
      <div>
        Author Name: <b>{oneTwit.author}</b>
      </div>
      <div className="mb-2">
        Post Text: <b>{oneTwit.text}</b>
      </div>
      <Link to="/">
        <Button className="btn btn-danger mx-1" onClick={() => deleteTwit(id)}>
          DELETE
        </Button>
      </Link>
      <Link to={`/edit/${id}`}>
        <Button className="btn btn-success mx-1">EDIT</Button>
      </Link>
    </div>
  ) : (
    <h5>Loading...</h5>
  );
};

export default Details;
