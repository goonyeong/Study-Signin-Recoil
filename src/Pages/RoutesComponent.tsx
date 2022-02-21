import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Signup from './Signup/Signup';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RoutesComponent;
