import React, { lazy, Suspense } from 'react';

const LazyStaffAddEdit = lazy(() => import('./StaffAddEdit'));

const StaffAddEdit = props => (
  <Suspense fallback={null}>
    <LazyStaffAddEdit {...props} />
  </Suspense>
);

export default StaffAddEdit;
