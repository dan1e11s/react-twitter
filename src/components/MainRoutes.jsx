import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddTwits from './AddTwits';
import Details from './Details';
import EditTwits from './EditTwits';
import Layout from './Layout';
import TwitsContextProvider from './TwitsContext';
import TwitsList from './TwitsList';

const MainRoutes = () => {
  return (
    <TwitsContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TwitsList />} />
          <Route path="/add" element={<AddTwits />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<EditTwits />} />
        </Route>
      </Routes>
    </TwitsContextProvider>
  );
};

export default MainRoutes;
