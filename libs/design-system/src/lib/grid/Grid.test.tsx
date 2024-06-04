import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './Grid.stories';

const { LightGrid, DarkGrid } = composeStories(stories);

describe('LightGrid', () => {
  it('should render successfully', () => {
    render(<LightGrid />);
    expect(screen.getByText('1')).not.toBeNull();
  });
});

describe('DarkGrid', () => {
  it('should render successfully', () => {
    render(<DarkGrid />);
    expect(screen.getByText('1')).not.toBeNull();
  });
});
