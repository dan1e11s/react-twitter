import React, { useContext, useState, useEffect } from 'react';
import { twitsContext } from './TwitsContext';
import { useParams, useNavigate } from 'react-router-dom';
import { FormControl, Button } from 'react-bootstrap';

const EditTwits = () => {
  const { oneTwit, getOneTwit, updateTwit } = useContext(twitsContext);

  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneTwit(id);
  }, []);

  useEffect(() => {
    if (oneTwit) {
      setAuthor(oneTwit.author);
      setText(oneTwit.text);
      setImage(oneTwit.image);
    }
  }, [oneTwit]);

  const style = {
    maxWidth: '50%',
    margin: '30px auto 0',
    height: '80vh',
    border: '2px solid black',
    borderRadius: '20px',
    padding: '15px',
    backgroundColor: 'white',
  };

  function saveChanges() {
    if (!author || !text || !image) {
      alert('Some inputs are empty!');
      return;
    }

    let editedTwit = {
      author,
      text,
      image,
    };

    updateTwit(id, editedTwit);

    navigate('/');
  }

  return oneTwit ? (
    <div style={style}>
      <div
        style={{
          margin: '5vh 0 20vh 0',
        }}
      >
        <h3 className="text-center">Edit Twit</h3>
        <FormControl
          className="mb-4"
          type="text"
          placeholder="Enter author name"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <FormControl
          className="mb-4"
          type="text"
          placeholder="Enter post text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <FormControl
          className="mb-4"
          type="text"
          placeholder="Enter url image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <Button
          className="btn btn-success w-50 d-block mx-auto"
          onClick={saveChanges}
        >
          SAVE CHANGES
        </Button>
      </div>
    </div>
  ) : (
    <h5>Loading...</h5>
  );
};

export default EditTwits;
