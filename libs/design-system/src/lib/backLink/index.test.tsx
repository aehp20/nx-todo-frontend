import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { LightBackLink, DarkBackLink } = composeStories(stories);

describe('LightBackLink', () => {
  it('should render successfully', () => {
    render(<LightBackLink />);
    expect(screen.getByText('Back to Home page')).not.toBeNull();
  });
});

describe('DarkBackLink', () => {
  it('should render successfully', () => {
    render(<DarkBackLink />);
    expect(screen.getByText('Back to Home page')).not.toBeNull();
  });
});
