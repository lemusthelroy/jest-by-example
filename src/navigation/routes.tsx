import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import PlanetPage from '../pages/planet/completed';
import PlanetsPage from '../pages/planets/completed';

const Routes = () => (
  <RouterRoutes>
    <Route path='/' element={<Navigate to='/planets' />} />
    <Route path='/planets' element={<PlanetsPage />} />
    <Route path='/planet/:id' element={<PlanetPage />} />
  </RouterRoutes>
);

export default Routes;
