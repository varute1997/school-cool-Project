import React, { lazy, Suspense } from 'react';

const LazyCourseManagement = lazy(() => import('./CourseManagement'));

const CourseManagement = props => (
  <Suspense fallback={null}>
    <LazyCourseManagement {...props} />
  </Suspense>
);

export default CourseManagement;
