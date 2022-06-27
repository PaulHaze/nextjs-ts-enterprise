import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Tailwind/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
