import Header from './Header/Header';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container">
        <>{children}</>
      </main>
    </>
  );
}
