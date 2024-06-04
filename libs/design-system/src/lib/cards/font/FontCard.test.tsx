import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './FontCard.stories';

const { LightFontCard, DarkFontCard } = composeStories(stories);

describe('LightFontCard', () => {
  it('should render successfully', () => {
    render(<LightFontCard />);
    expect(screen.getByText('Nunito')).not.toBeNull();
  });
});

describe('DarkFontCard', () => {
  it('should render successfully', () => {
    render(<DarkFontCard />);
    expect(screen.getByText('Nunito')).not.toBeNull();
  });
});
