import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightCardWithActions, DarkCardWithActions } = composeStories(stories);

describe('LightCardWithActions', () => {
  it('should render successfully', () => {
    render(<LightCardWithActions />);
    expect(screen.getByText('Hello')).not.toBeNull();
  });
});

describe('DarkCardWithActions', () => {
  it('should render successfully', () => {
    render(<DarkCardWithActions />);
    expect(screen.getByText('Hello')).not.toBeNull();
  });
});
