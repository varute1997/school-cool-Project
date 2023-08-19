import React, { lazy, Suspense } from 'react';

const LazyStudentAddEdit = lazy(() => import('./StudentAddEdit'));

const StudentAddEdit = props => (
  <Suspense fallback={null}>
    <LazyStudentAddEdit {...props} />
  </Suspense>
);

export default StudentAddEdit;
