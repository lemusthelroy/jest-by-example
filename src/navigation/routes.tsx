import React from 'react';
import { Routes as RouterRoutes, Route, Link } from 'react-router-dom';
import PlanetsPage from '../pages/planets';

const Routes = () => (
  <RouterRoutes>
    <Route path='/planets' element={<PlanetsPage />} />

    {/* <Route path='/planet/:id' ></Route> */}
  </RouterRoutes>
);

export default Routes;
