import { render, screen } from '@testing-library/react';

import NavButton from '@/components/NavButton';

describe(`NavButton`, () => {
  it(`renders a Title component`, () => {
    render(<NavButton>Test NavButton</NavButton>);

    expect(screen.getByText(`Test NavButton`)).toBeInTheDocument();
  });
});
