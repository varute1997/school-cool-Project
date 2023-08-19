import React, { lazy, Suspense } from 'react';

const LazyAddCourse = lazy(() => import('./AddCourse'));

const AddCourse = props => (
  <Suspense fallback={null}>
    <LazyAddCourse {...props} />
  </Suspense>
);

export default AddCourse;
