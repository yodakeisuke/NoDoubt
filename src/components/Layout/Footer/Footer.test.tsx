import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from 'components/Layout/Footer/Footer';

it('renders credite', () => {
  render(<Footer />);
  expect(screen.getByText('Keisuke')).toBeInTheDocument();
});
