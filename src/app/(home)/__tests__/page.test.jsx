import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '../page.tsx';

describe('Home Page', () => {
  it('contains a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
