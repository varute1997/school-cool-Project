import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StudentAddEdit from './StudentAddEdit';

describe('<StudentAddEdit />', () => {
  test('it should mount', () => {
    render(<StudentAddEdit />);
    
    const studentAddEdit = screen.getByTestId('StudentAddEdit');

    expect(studentAddEdit).toBeInTheDocument();
  });
});