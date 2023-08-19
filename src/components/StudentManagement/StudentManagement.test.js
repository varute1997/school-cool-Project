import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StudentManagement from './StudentManagement';

describe('<StudentManagement />', () => {
  test('it should mount', () => {
    render(<StudentManagement />);
    
    const studentManagement = screen.getByTestId('StudentManagement');

    expect(studentManagement).toBeInTheDocument();
  });
});