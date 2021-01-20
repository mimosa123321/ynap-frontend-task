import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello this is header/i);
  expect(linkElement).toBeInTheDocument();
});
