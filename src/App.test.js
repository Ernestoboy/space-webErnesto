import { render, screen } from '@testing-library/react';
import App from './App';
import Inicio from "./component/Inicio"

test('renders learn react link', () => {
  render(<Inicio />);
  const noiElement = screen.getByText(/blabla/i);
  expect(noiElement).toBeInTheDocument();
  
});
