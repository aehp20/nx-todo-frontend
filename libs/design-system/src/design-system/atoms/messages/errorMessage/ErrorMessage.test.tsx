import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './ErrorMessage.stories';

const { LightErrorMessages, DarkErrorMessages } = composeStories(stories);

describe('LightErrorMessages', () => {
  it('should render successfully', () => {
    render(<LightErrorMessages />);
    expect(screen.getByText('An error has occurred')).not.toBeNull();
  });
});

describe('DarkErrorMessages', () => {
  it('should render successfully', () => {
    render(<DarkErrorMessages />);
    expect(screen.getByText('An error has occurred')).not.toBeNull();
  });
});
