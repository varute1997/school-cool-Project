import React, { lazy, Suspense } from 'react';

const LazyStudentManagement = lazy(() => import('./StudentManagement'));

const StudentManagement = props => (
  <Suspense fallback={null}>
    <LazyStudentManagement {...props} />
  </Suspense>
);

export default StudentManagement;
