import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightLinks, DarkLinks } = composeStories(stories);

describe('LightLinks', () => {
  it('should render successfully', () => {
    render(<LightLinks />);
    expect(
      screen.getByText('https://www.linkedin.com/in/aronherreraponte/'),
    ).not.toBeNull();
  });
});

describe('DarkLinks', () => {
  it('should render successfully', () => {
    render(<DarkLinks />);
    expect(
      screen.getByText('https://www.linkedin.com/in/aronherreraponte/'),
    ).not.toBeNull();
  });
});
