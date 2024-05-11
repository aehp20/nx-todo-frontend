import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightTextDelete, DarkTextDelete } = composeStories(stories);

describe('LightTextDelete', () => {
  it('should render successfully', () => {
    render(<LightTextDelete />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });
});

describe('DarkTextDelete', () => {
  it('should render successfully', () => {
    render(<DarkTextDelete />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });
});
