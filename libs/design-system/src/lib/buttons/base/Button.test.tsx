import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './Button.stories';

const { LightButtons, DarkButtons } = composeStories(stories);

describe('LightButtons', () => {
  it('should render successfully', () => {
    render(<LightButtons />);
    expect(screen.getByText('Save')).not.toBeNull();
  });
});

describe('DarkButtons', () => {
  it('should render successfully', () => {
    render(<DarkButtons />);
    expect(screen.getByText('Save')).not.toBeNull();
  });
});
