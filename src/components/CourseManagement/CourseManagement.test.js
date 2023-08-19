import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseManagement from './CourseManagement';

describe('<CourseManagement />', () => {
  test('it should mount', () => {
    render(<CourseManagement />);
    
    const courseManagement = screen.getByTestId('CourseManagement');

    expect(courseManagement).toBeInTheDocument();
  });
});