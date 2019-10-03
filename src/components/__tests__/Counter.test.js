import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Counter from '../Counter';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Counter user='Peter' countLimit={5} />);
});

describe('Counter component', () => {
  it('can debug the output', () => {
    tools.debug();
  });

  it('shows the correct user', () => {
    const elementWithJoshText = tools.queryByText(/peter/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it('initial count is zero', () => {
    const elementWithZero = tools.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();
  });

  it('can increment the count by one by clicking increment', () => {
    const incButton = tools.queryByTestId('incButton');

    rtl.fireEvent.click(incButton);
    expect(tools.queryByText(/0/)).not.toBeInTheDocument();
    expect(tools.queryByText(/1/)).toBeInTheDocument();

    rtl.fireEvent.click(incButton);
    expect(tools.queryByText(/1/)).not.toBeInTheDocument();
    expect(tools.queryByText(/2/)).toBeInTheDocument();
  });

  it('can decrement the count by one by clicking decrement', () => {
    const decButton = tools.queryByTestId("decButton");

    expect(tools.queryByText(/0/)).toBeInTheDocument(); // Overkill?
    rtl.fireEvent.click(decButton);
    expect(tools.queryByText(/0/)).not.toBeInTheDocument();
    expect(tools.queryByText(/-1/)).toBeInTheDocument();

    rtl.fireEvent.click(decButton);
    expect(tools.queryByText(/-1/)).not.toBeInTheDocument();
    expect(tools.queryByText(/-2/)).toBeInTheDocument();
  });

  it('can reset the count clicking reset', () => {
    const resetButton = tools.queryByTestId("resetButton");

    rtl.fireEvent.click(resetButton);
    expect(tools.queryByText(/0/)).toBeInTheDocument();

    // Hmm... not sure how to account for the 'the counter is already at 0' false positive w/o relying on one of the other buttons...
  });

  it('prevents the count from going over an upper limit', () => {
    const incButton = tools.queryByTestId('incButton');
    
    for (let i = 0; i < 10; i++) {
      rtl.fireEvent.click(incButton);
    }

    expect(tools.queryByText(/5/)).toBeInTheDocument(); // I set this upper limit above.
  });

  it('prevents the count from going under a lower limit', () => {
    const decButton = tools.queryByTestId('decButton');

    for (let i = 0; i < 10; i++) {
      rtl.fireEvent.click(decButton);
    }

    expect(tools.queryByText(/-5/)).toBeInTheDocument();
  });

  it('shows a warning once we hit the upper limit of the counter', () => {
    // implement
  });

  it('shows a warning once we hit the lower limit of the counter', () => {
    // implement
  });
});
