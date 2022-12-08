import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('renders the navbar component', () => {
  const { asFragment } = render(
    <NavBar />,
  );

  expect(asFragment()).toMatchSnapshot();
});
