import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { LightMessages, DarkMessages } = composeStories(stories);

describe('LightMessages', () => {
  it('should render successfully', () => {
    render(<LightMessages />);
    expect(screen.getByText('An error has occurred')).not.toBeNull();
  });
});

describe('DarkMessages', () => {
  it('should render successfully', () => {
    render(<DarkMessages />);
    expect(screen.getByText('An error has occurred')).not.toBeNull();
  });
});