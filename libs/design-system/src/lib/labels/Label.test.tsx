import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Label.stories';

const { LightLabels, DarkLabels } = composeStories(stories);

describe('LightLabels', () => {
  it('should render successfully', () => {
    render(<LightLabels />);
    expect(screen.getByLabelText('Username')).not.toBeNull();
  });
});

describe('DarkLabels', () => {
  it('should render successfully', () => {
    render(<DarkLabels />);
    expect(screen.getByLabelText('Username')).not.toBeNull();
  });
});
