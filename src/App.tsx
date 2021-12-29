import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './navigation/routes';

const queryClient = new QueryClient();

const App = () => (
  <div style={{ height: '100vh' }}>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </div>
);

export default App;
