import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import SearchPage from 'pages/SearchPage/SearchPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import CastPage from 'pages/SingleMoviePage/CastPage/CastPage';
import ReviewPage from 'pages/SingleMoviePage/ReviewPage/ReviewPage';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/movies" element={<SearchPage />} />
          <Route path="/movies/:movieId" element={<SingleMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
