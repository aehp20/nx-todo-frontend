import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightCard, DarkCard } = composeStories(stories);

describe('LightCard', () => {
  it('should render successfully', () => {
    render(<LightCard />);
    expect(screen.getByText('Hello')).not.toBeNull();
  });
});

describe('DarkCard', () => {
  it('should render successfully', () => {
    render(<DarkCard />);
    expect(screen.getByText('Hello')).not.toBeNull();
  });
});
