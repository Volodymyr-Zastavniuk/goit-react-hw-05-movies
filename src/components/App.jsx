import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const SingleMoviePage = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const CastPage = lazy(() => import('pages/SingleMoviePage/CastPage/CastPage'));
const ReviewPage = lazy(() =>
  import('pages/SingleMoviePage/ReviewPage/ReviewPage')
);

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/movies" element={<SearchPage />} />
            <Route path="/movies/:movieId" element={<SingleMoviePage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
