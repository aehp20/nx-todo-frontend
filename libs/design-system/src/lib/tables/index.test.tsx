import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './index.stories';

const { LightTable, DarkTable } = composeStories(stories);

describe('LightTable', () => {
  it('should render successfully', () => {
    render(<LightTable />);
    expect(screen.getByText('name')).not.toBeNull();
  });
});

describe('DarkTable', () => {
  it('should render successfully', () => {
    render(<DarkTable />);
    expect(screen.getByText('name')).not.toBeNull();
  });
});
