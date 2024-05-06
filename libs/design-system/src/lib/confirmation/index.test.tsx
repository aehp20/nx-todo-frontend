import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightConfirmation, DarkConfirmation } = composeStories(stories);

describe('LightConfirmation', () => {
  it('should render successfully', () => {
    render(<LightConfirmation />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });
});

describe('DarkConfirmation', () => {
  it('should render successfully', () => {
    render(<DarkConfirmation />);
    expect(screen.getByText('Delete')).not.toBeNull();
  });
});
