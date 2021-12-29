import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PlanetsPage from '.';
import Planets from '../../mocks/fixtures/planets';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children: JSX.Element }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('Planets page', () => {
  it('should display list of planets from Star Wars', async () => {
    render(
      <Wrapper>
        <PlanetsPage />
      </Wrapper>,
    );

    await waitFor(() => expect(screen.queryByAltText('Planets loading')).not.toBeInTheDocument());

    expect(screen.getByText(Planets.results[0].name)).toBeInTheDocument();
    expect(screen.getByText(Planets.results[1].name)).toBeInTheDocument();
  });

  it('should navigate to plant page when clicking planet', async () => {
    render(
      <Wrapper>
        <PlanetsPage />
      </Wrapper>,
    );

    await waitFor(() => expect(screen.queryByAltText('Planets loading')).not.toBeInTheDocument());

    const planet = screen.getByText(Planets.results[0].name);

    userEvent.click(planet);

    expect(await screen.findByText('Back to planets')).toBeInTheDocument();
  });
});
