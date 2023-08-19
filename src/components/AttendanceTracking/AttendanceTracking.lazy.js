import React, { lazy, Suspense } from 'react';

const LazyAttendanceTracking = lazy(() => import('./AttendanceTracking'));

const AttendanceTracking = props => (
  <Suspense fallback={null}>
    <LazyAttendanceTracking {...props} />
  </Suspense>
);

export default AttendanceTracking;
