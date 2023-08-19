import React, { lazy, Suspense } from 'react';

const LazyStaffManagement = lazy(() => import('./StaffManagement'));

const StaffManagement = props => (
  <Suspense fallback={null}>
    <LazyStaffManagement {...props} />
  </Suspense>
);

export default StaffManagement;
