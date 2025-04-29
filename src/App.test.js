import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pet Adoption Center header', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /pet adoption center/i });
  expect(headingElement).toBeInTheDocument();
});
