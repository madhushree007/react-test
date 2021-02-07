import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import Stages from './Stages';

jest.mock('../../services/Stages');

const queryClient = new QueryClient();

describe('App', () => {
  it('loads the pages', async () => {
    render(
      <Router>
        <QueryClientProvider client={queryClient}>
          <Stages />
        </QueryClientProvider>
      </Router>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText('first post')).toBeInTheDocument();
  });
});
