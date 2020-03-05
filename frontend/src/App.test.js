import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders result page', () => {
  const { getByText } = render(<App />);
  let resultsElement;
  act(() => {
      resultsElement = getByText(/Results/i);
  });
  expect(resultsElement).toBeInTheDocument();
});
