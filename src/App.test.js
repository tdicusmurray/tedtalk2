import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Adjust the import path as needed

test('renders the App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello, World/i); // Adjust the text to match your component content
  expect(linkElement).toBeInTheDocument();
});
