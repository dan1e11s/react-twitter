import React, { useState, useContext } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { twitsContext } from './TwitsContext';
import { useNavigate } from 'react-router-dom';

const AddTwits = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const { addTwit } = useContext(twitsContext);

  const navigate = useNavigate();

  const style = {
    maxWidth: '50%',
    margin: '30px auto 0',
    height: '80vh',
    border: '2px solid black',
    borderRadius: '20px',
    padding: '15px',
    backgroundColor: 'white',
  };

  function createTwit() {
    if (!author || !text || !image) {
      alert('Some inputs are empty!');
      return;
    }

    let newTwit = {
      author,
      text,
      image,
    };

    addTwit(newTwit);

    setAuthor('');
    setText('');
    setImage('');

    navigate('/');
  }

  return (
    <div style={style}>
      <div
        style={{
          margin: '5vh 0 20vh 0',
        }}
      >
        <h3 className="text-center">Add Twit</h3>
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
        <Button className="w-50 d-block mx-auto" onClick={createTwit}>
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddTwits;
