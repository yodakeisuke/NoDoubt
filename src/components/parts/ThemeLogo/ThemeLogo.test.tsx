import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeLogo from './ThemeLogo';

it('renders credite', () => {
  render(<ThemeLogo />);

  const img = screen.getByAltText('mainlogo');
  expect(img).toHaveStyle(`
    max-width: 100%
`);
});
