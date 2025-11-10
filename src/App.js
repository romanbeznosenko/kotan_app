import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/common/TopNavigation/TopNavigation';
import Banner from './components/common/Banner/Banner';
import MatchesCarousel from './components/MatchesCarousel/MatchesCarousel';
import NewsSection from './components/NewsSection/NewsSection';
import SponsorsSection from './components/common/SponsorSection/SponsorsSection';
import Footer from './components/common/Footer/Footer';
import MatchesPage from './components/MatchesPage/MatchesPage';
import TeamsPage from './pages/TeamPage/TeamPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsDetailPage from './pages/NewsDetailsPage/NewsPageDetails';

// Home Page Component
function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <>
      <TopNavigation onNavigate={handleNavigate} currentPage={currentPage} />

      <div className="App">
        {/* Hero Section */}
        <Banner />

        {/* Matches Section */}
        <MatchesCarousel />

        {/* News Section */}
        <NewsSection onNavigate={handleNavigate} />

        {/* Sponsors Section */}
        <SponsorsSection />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}

// Matches Page Wrapper
function MatchesPageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <MatchesPage onNavigate={handleNavigate} />;
}

// Teams Page Wrapper
function TeamsPageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <TeamsPage onNavigate={handleNavigate} />;
}

// News Page Wrapper
function NewsPageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <NewsPage onNavigate={handleNavigate} />;
}

// News Detail Page Wrapper
function NewsDetailPageWrapper() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return <NewsDetailPage onNavigate={handleNavigate} />;
}

// Gallery Page
function GalleryPage() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      <TopNavigation onNavigate={handleNavigate} currentPage="gallery" />
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', color: '#012A97' }}>
          Galeria - W budowie
        </h1>
        <p style={{ fontFamily: 'Urbanist, sans-serif', color: '#6b7280' }}>
          Ta strona jest w przygotowaniu
        </p>
        <button
          onClick={() => handleNavigate('home')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#012A97',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Wróć na stronę główną
        </button>
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Matches Page */}
        <Route path="/matches" element={<MatchesPageWrapper />} />
        <Route path="/rozgrywki" element={<MatchesPageWrapper />} />

        {/* Teams Page */}
        <Route path="/teams" element={<TeamsPageWrapper />} />
        <Route path="/zespoly" element={<TeamsPageWrapper />} />

        {/* News Pages - FIXED: Removed duplicate routes */}
        <Route path="/news" element={<NewsPageWrapper />} />
        <Route path="/aktualnosci" element={<NewsPageWrapper />} />
        <Route path="/news-detail" element={<NewsDetailPageWrapper />} />
        <Route path="/news/:id" element={<NewsDetailPageWrapper />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/galeria" element={<GalleryPage />} />

        {/* 404 - Redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;