import { render } from '@testing-library/react';

import Query from './query';

describe('Query', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Query />);
    expect(baseElement).toBeTruthy();
  });
});
