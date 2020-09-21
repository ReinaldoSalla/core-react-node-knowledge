import React from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';

const HomePage = () => (
  <Route path='/' exact>
    <VideoBackground />
  </Route>
);

export default HomePage;