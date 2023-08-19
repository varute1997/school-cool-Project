import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttendanceTracking from './AttendanceTracking';

describe('<AttendanceTracking />', () => {
  test('it should mount', () => {
    render(<AttendanceTracking />);
    
    const attendanceTracking = screen.getByTestId('AttendanceTracking');

    expect(attendanceTracking).toBeInTheDocument();
  });
});