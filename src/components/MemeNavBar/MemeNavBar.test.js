import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeNavBar from './MemeNavBar';

describe('<MemeNavBar />', () => {
  test('it should mount', () => {
    render(<MemeNavBar />);
    
    const memeNavBar = screen.getByTestId('MemeNavBar');

    expect(memeNavBar).toBeInTheDocument();
  });
});