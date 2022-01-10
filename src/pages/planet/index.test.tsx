import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from '../../navigation/routes';
import { MemoryRouter } from 'react-router-dom';
import Planets from '../../mocks/fixtures/planets';

const queryClient = new QueryClient();

const Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/planet/1`]}>
        <Routes />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('Planet page', () => {
  afterEach(() => {
    queryClient.clear();
  });

  it('should display the loader for the page', () => {
    render(<Component />);

    expect(screen.getByAltText('Planet loading')).toBeInTheDocument();
  });

  it('should render planet information', async () => {
    render(<Component />);

    await waitFor(() => expect(screen.queryByAltText('Planet loading')).not.toBeInTheDocument());

    const title = await screen.findByText('Planet Information');
    const planetName = screen.getByText(Planets.results[0].name);
    const planetClimate = screen.getByText(Planets.results[0].climate);
    const planetPopulation = screen.getByText(Planets.results[0].population);

    expect(title).toBeInTheDocument();
    expect(planetName).toBeInTheDocument();
    expect(planetClimate).toBeInTheDocument();
    expect(planetPopulation).toBeInTheDocument();
  });
});
