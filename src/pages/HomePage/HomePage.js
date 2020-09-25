import React from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';

const HomePage = () => (
  <Route path='/' exact>
    <VideoBackground />
    <Courosel />
    <Categories />
  </Route>
);

export default HomePage;