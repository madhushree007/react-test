import { render, screen } from '@testing-library/react';
import App from 'App';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
describe('App', () => {
  it('loads the main div container', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
