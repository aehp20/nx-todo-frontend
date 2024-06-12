import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './Message.stories';

const { LightMessages, DarkMessages } = composeStories(stories);

describe('LightMessages', () => {
  it('should render successfully', () => {
    render(<LightMessages />);
    expect(
      screen.getByText('This is a default message without type props'),
    ).not.toBeNull();
  });
});

describe('DarkMessages', () => {
  it('should render successfully', () => {
    render(<DarkMessages />);
    expect(
      screen.getByText('This is a default message without type props'),
    ).not.toBeNull();
  });
});
