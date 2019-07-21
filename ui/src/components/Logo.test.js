import React from 'react';
import { render } from '@testing-library/react';
import Logo from 'components/Logo';

describe('Logo component', () => {
  it('render children text', () => {
    const { getByText } = render(<Logo>Recruitment task</Logo>);

    getByText('Recruitment task');
  });
});
