import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightPage, DarkPage } = composeStories(stories);

describe('LightPage', () => {
  it('should render successfully', () => {
    render(<LightPage />);
    expect(screen.getByText('Todo page')).not.toBeNull();
  });
});

describe('DarkPage', () => {
  it('should render successfully', () => {
    render(<DarkPage />);
    expect(screen.getByText('Todo page')).not.toBeNull();
  });
});
