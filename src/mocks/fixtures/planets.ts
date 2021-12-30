import IPlanets from '../../types/planets';

const Planets: IPlanets = {
  count: 2,
  results: [
    {
      name: 'Planet 1',
      climate: 'Toasty',
      population: '100',
      url: 'https://swapi.dev/api/planets/1/',
    },
    {
      name: 'Planet 2',
      climate: 'Frosty',
      population: '10',
      url: 'https://swapi.dev/api/planets/2/',
    },
  ],
};

export default Planets;
