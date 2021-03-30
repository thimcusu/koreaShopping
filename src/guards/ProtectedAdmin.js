import React, { Suspense } from 'react';
import useFetchCurrentUser from '../api/useFetchCurrentUser';
import Spinner from '../components/common/Spinner';

const Authenticated = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('../components/admin')), 1000),
    ),
);
const Unauthenticated = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('./UnauthenticatedAdmin')), 1000),
    ),
);

function ProtectedAdmin() {
  const { loggedIn, currentUser } = useFetchCurrentUser();
  return (
    <Suspense fallback={<Spinner />}>
      {loggedIn ? <Authenticated /> : <Unauthenticated />}
    </Suspense>
  );
}

export default ProtectedAdmin;
