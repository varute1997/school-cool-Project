import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StaffManagement from './StaffManagement';

describe('<StaffManagement />', () => {
  test('it should mount', () => {
    render(<StaffManagement />);
    
    const staffManagement = screen.getByTestId('StaffManagement');

    expect(staffManagement).toBeInTheDocument();
  });
});