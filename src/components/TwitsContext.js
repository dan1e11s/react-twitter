import React, { useState } from 'react';
import axios from 'axios';

export const twitsContext = React.createContext();

const TwitsContextProvider = ({ children }) => {
  const [twits, setTwits] = useState([]);
  const [oneTwit, setOneTwit] = useState(null);

  const API = 'http://localhost:8000/twits';

  async function getTwits() {
    let res = await axios(API);
    setTwits(res.data);
  }

  async function getOneTwit(id) {
    let res = await axios(`${API}/${id}`);
    setOneTwit(res.data);
  }

  async function addTwit(newTwit) {
    await axios.post(API, newTwit);
    getTwits();
  }

  async function deleteTwit(id) {
    await axios.delete(`${API}/${id}`);
    getTwits();
  }

  async function updateTwit(id, editedTwit) {
    await axios.patch(`${API}/${id}`, editedTwit);
  }

  return (
    <twitsContext.Provider
      value={{
        twits,
        oneTwit,

        addTwit,
        getTwits,
        getOneTwit,
        deleteTwit,
        updateTwit,
      }}
    >
      {children}
    </twitsContext.Provider>
  );
};

export default TwitsContextProvider;
