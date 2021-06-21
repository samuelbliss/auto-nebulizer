import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const listItem = screen.getByText('Model');
  expect(listItem).toBeInTheDocument();
});
