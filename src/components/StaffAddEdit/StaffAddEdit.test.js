import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StaffAddEdit from './StaffAddEdit';

describe('<StaffAddEdit />', () => {
  test('it should mount', () => {
    render(<StaffAddEdit />);
    
    const staffAddEdit = screen.getByTestId('StaffAddEdit');

    expect(staffAddEdit).toBeInTheDocument();
  });
});