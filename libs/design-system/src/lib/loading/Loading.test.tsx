import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Loading.stories';

const { LightLoading, DarkLoading } = composeStories(stories);

describe('LightLoading', () => {
  it('should render successfully', () => {
    const { container } = render(<LightLoading />);
    const svgEl = container.querySelector(
      "[data-icon='spinner']",
    ) as HTMLImageElement;
    expect(svgEl.classList.toString()).toContain('fill-blue-600');
  });
});

describe('DarkLoading', () => {
  it('should render successfully', () => {
    const { container } = render(<DarkLoading />);
    const svgEl = container.querySelector(
      "[data-icon='spinner']",
    ) as HTMLImageElement;
    expect(svgEl.classList.toString()).toContain('fill-blue-600');
  });
});
