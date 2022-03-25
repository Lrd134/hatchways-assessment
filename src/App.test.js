import { render, screen } from '@testing-library/react';
import App from './App';

test('renders characters', () => {
  render(<App />);
  const emailElement = screen.getByText(/email/i);
  expect(emailElement.className).toBe("profile")
});
