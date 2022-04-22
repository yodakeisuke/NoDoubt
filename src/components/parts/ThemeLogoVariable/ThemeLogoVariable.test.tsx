import React from 'react';

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ThemeLogoVariable from './ThemeLogoVariable';

it('renders credite', () => {
  render(<ThemeLogoVariable />)

  const img = screen.getByAltText('mainlogo')
  expect(img).toHaveStyle(`
    max-width: 100%
`)
})
