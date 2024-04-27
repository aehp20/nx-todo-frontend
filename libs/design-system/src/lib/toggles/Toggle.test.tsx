import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Toggle.stories';

const { LightToggles, DarkToggles } = composeStories(stories);

describe('LightInputs', () => {
  it('should render successfully', () => {
    render(<LightToggles />);
    expect(screen.getAllByRole('checkbox')).not.toBeNull();
  });
});

describe('DarkInputs', () => {
  it('should render successfully', () => {
    render(<DarkToggles />);
    expect(screen.getAllByRole('checkbox')).not.toBeNull();
  });
});
