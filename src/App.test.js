import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';


// Add your tests here

it('renders the default button label', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Click me')).toBeInTheDocument();
  });
  
  it('changes the button label on click', () => {
    const { getByText } = render(<Default />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Thanks!');
  });

  // I have added a third test below to check that the button text changes back to "click me" from "thanks"

  it('changes the button label back on click', () => {
    const { getByText } = render(<Default />);
    const button = getByText('Click me');
    
    // click once to change text to "Thanks!"
    fireEvent.click(button);
    expect(button).toHaveTextContent('Thanks!');
  
    // click again to change text back to "Click me"
    fireEvent.click(button);
    expect(button).toHaveTextContent('Click me');
  });
  


// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library