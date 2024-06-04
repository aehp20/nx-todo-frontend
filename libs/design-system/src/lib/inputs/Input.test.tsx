import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './Input.stories';

const { LightInputs, DarkInputs } = composeStories(stories);

describe('LightInputs', () => {
  it('should render successfully', () => {
    render(<LightInputs />);
    expect(screen.getByRole('textbox')).not.toBeNull();
  });
});

describe('DarkInputs', () => {
  it('should render successfully', () => {
    render(<DarkInputs />);
    expect(screen.getByRole('textbox')).not.toBeNull();
  });
});
