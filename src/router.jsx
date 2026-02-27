import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { RootLayout } from './Components/RoutLayout';
import  NotFound  from './Components/NotFound';

// Lazy load components
const EventDetails = lazy(() => import('./Components/EventDetails'));
const AddEvent = lazy(() => import('./Components/AddEvent'));
const UpdateEvent = lazy(() => import('./Components/UpdateEvent'));

// eslint-disable-next-line react-refresh/only-export-components
const LoadingFallback = () => (
  <div className="container py-5 text-center">
    <p>Chargement...</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/events',
        element: <App />,
      },
      {
        path: '/event/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EventDetails />
          </Suspense>
        ),
      },
      {
        path: '/add-event',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AddEvent />
          </Suspense>
        ),
      },
      {
        path: '/update-event/:id',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UpdateEvent />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <div className="container py-5">
            <h1 className="mb-4">À propos</h1>
            <p className="fs-5 text-muted">
              ESPRIT Events Management - Plateforme de gestion d'événements pour les clubs de l'école ESPRIT.
            </p>
          </div>
        ),
      },
      {
        path: '/contact',
        element: (
          <div className="container py-5">
            <h1 className="mb-4">Contact</h1>
            <p className="fs-5 text-muted">
              Pour nous contacter, envoyez un email à: events@esprit.tn
            </p>
          </div>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
export default router;