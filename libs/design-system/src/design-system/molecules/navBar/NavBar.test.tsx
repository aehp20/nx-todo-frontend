import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './NavBar.stories';

const { LightNavBar, DarkNavBar } = composeStories(stories);

describe('LightNavBar', () => {
  it('should render successfully', () => {
    render(<LightNavBar />);
    expect(screen.getByText('Docs')).not.toBeNull();
  });
});

describe('DarkNavBar', () => {
  it('should render successfully', () => {
    render(<DarkNavBar />);
    expect(screen.getByText('Docs')).not.toBeNull();
  });
});
