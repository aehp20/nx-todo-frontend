import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { LightTitle, DarkTitle } = composeStories(stories);

describe('LightTitle', () => {
  it('should render successfully', () => {
    render(<LightTitle />);
    expect(screen.getByText('Todo')).not.toBeNull();
  });
});

describe('DarkTitle', () => {
  it('should render successfully', () => {
    render(<DarkTitle />);
    expect(screen.getByText('Todo')).not.toBeNull();
  });
});
