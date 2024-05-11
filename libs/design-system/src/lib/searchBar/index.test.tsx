import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightSearchBar, DarkSearchBar } = composeStories(stories);

describe('LightSearchBar', () => {
  it('should render successfully', () => {
    render(<LightSearchBar />);
    expect(screen.getByLabelText('Name')).not.toBeNull();
  });
});

describe('DarkSearchBar', () => {
  it('should render successfully', () => {
    render(<DarkSearchBar />);
    expect(screen.getByLabelText('Name')).not.toBeNull();
  });
});
