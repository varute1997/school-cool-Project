import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddCourse from './AddCourse';

describe('<AddCourse />', () => {
  test('it should mount', () => {
    render(<AddCourse />);
    
    const addCourse = screen.getByTestId('AddCourse');

    expect(addCourse).toBeInTheDocument();
  });
});