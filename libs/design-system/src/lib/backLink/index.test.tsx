import { axe, toHaveNoViolations } from 'jest-axe';

import { composeStories } from '@storybook/testing-react';
import { StoryFn } from '@storybook/testing-react/dist/types';
import { render, screen } from '@testing-library/react';

import { BackLinkProps } from '.';
import * as stories from './index.stories';

expect.extend(toHaveNoViolations);

const storiesForTesting: Record<
  string,
  StoryFn<Partial<BackLinkProps>>
> = composeStories(stories);

describe('Test stories', () => {
  for (const key in storiesForTesting) {
    it('should render successfully', async () => {
      const Story = storiesForTesting[key];
      const { container } = render(<Story />);
      expect(await axe(container)).toHaveNoViolations();
      expect(screen.getByText('Back to Home page')).not.toBeNull();
    });
  }
});
