// src/mocks/server.js
import { setupServer } from 'msw/node';

// We are opting for handlers to be setup in tests to support MSW in parallel
export const server = setupServer();
