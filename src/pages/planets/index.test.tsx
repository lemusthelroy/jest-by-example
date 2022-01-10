import { screen, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from '../../navigation/routes';
import Planets from '../../mocks/fixtures/planets';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/planets`]}>
        <Routes />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('Planets page', () => {
  it('should display title for page', async () => {
    render(<Component />);

    const title = await screen.findByText('Star Wars Planets');

    expect(title).toBeInTheDocument();
  });

  it('should display list of planets from Star Wars', async () => {
    render(<Component />);

    await waitFor(() => expect(screen.queryByAltText('Planets loading')).not.toBeInTheDocument());

    expect(screen.getByText(Planets.results[0].name)).toBeInTheDocument();
    expect(screen.getByText(Planets.results[1].name)).toBeInTheDocument();
  });

  it.skip('should display list of planets from Star Wars', async () => {
    render(<Component />);

    expect(screen.getByText(Planets.results[0].name)).toBeInTheDocument();
    expect(screen.getByText(Planets.results[1].name)).toBeInTheDocument();
  });

  it('should navigate to plant page when clicking planet', async () => {
    render(<Component />);

    await waitFor(() => expect(screen.queryByAltText('Planets loading')).not.toBeInTheDocument());

    const planet = screen.getByText(Planets.results[0].name);

    userEvent.click(planet);

    expect(await screen.findByText('Planet Information')).toBeInTheDocument();
  });
});
