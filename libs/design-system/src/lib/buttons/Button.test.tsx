import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// import Button stories file as a module
import * as stories from './Button.stories';

// Every component that is returned maps 1:1 with the stories
const { LightButtons, DarkButtons } = composeStories(stories);

describe('LightButtons', () => {
  it('should render successfully', () => {
    render(<LightButtons />);
    expect(screen.getByText("Save")).not.toBeNull();
  });
});

describe('DarkButtons', () => {
  it('should render successfully', () => {
    render(<DarkButtons />);
    expect(screen.getByText("Save")).not.toBeNull();
  });
});
