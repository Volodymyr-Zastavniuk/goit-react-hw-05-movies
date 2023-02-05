import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import SearchPage from 'pages/SearchPage/SearchPage';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/movies" element={<SearchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
