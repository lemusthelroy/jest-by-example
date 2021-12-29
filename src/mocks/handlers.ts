import { rest } from 'msw';
import Planets from './fixtures/planets';

export const handlers = [
  rest.get('https://swapi.dev/api/planets', (req, res, ctx) => {
    return res(ctx.json(Planets));
  }),
];
