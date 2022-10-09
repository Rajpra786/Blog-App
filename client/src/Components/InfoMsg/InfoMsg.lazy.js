import React, { lazy, Suspense } from 'react';

const LazyInfoMsg = lazy(() => import('./InfoMsg'));

const InfoMsg = props => (
  <Suspense fallback={null}>
    <LazyInfoMsg {...props} />
  </Suspense>
);

export default InfoMsg;
