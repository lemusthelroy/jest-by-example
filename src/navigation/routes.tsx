import React from 'react';
import { Routes as RouterRoutes, Route, Link } from 'react-router-dom';
import PlanetPage from '../pages/planet';
import PlanetsPage from '../pages/planets';

const Routes = () => (
  <RouterRoutes>
    <Route path='/planets' element={<PlanetsPage />} />
    <Route path='/planet/:id' element={<PlanetPage />} />
  </RouterRoutes>
);

export default Routes;
