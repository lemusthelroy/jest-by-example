import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from '../../../navigation/routes';
import Planets from '../../../mocks/fixtures/planets';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PlanetPage from '../../planet/empty';

const queryClient = new QueryClient();

// Entry: '/planets'
// AltText: 'Planets loading'

const Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter
        initialEntries={
          [
            // Add entry!
          ]
        }
      >
        <Routes />
      </MemoryRouter>
    </QueryClientProvider>
  );
};
