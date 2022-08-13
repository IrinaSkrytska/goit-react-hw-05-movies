import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Appbar />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Movies />
            </Suspense>
          }
        ></Route>
        <Route
          path="movies/:movieId/*"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <MovieDetails />
            </Suspense>
          }
        ></Route>
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading....</div>}>
            <Home />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};
