import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightErrorBoundaryUI, DarkErrorBoundaryUI } = composeStories(stories);

describe('LightErrorBoundaryUI', () => {
  it('should render successfully', () => {
    render(<LightErrorBoundaryUI />);
    expect(screen.getByText('translatable', { exact: false })).not.toBeNull();
  });
});

describe('DarkErrorBoundaryUI', () => {
  it('should render successfully', () => {
    render(<DarkErrorBoundaryUI />);
    expect(screen.getByText('translatable', { exact: false })).not.toBeNull();
  });
});
