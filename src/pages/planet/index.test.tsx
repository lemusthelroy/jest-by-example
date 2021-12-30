import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from '../../navigation/routes';
import { MemoryRouter } from 'react-router-dom';
import Planets from '../../mocks/fixtures/planets';

// Entry: '/planet/1'
// AltText: 'Planet loading'

const queryClient = new QueryClient();

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
