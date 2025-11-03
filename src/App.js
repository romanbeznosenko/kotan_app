import { useState } from 'react';
import './App.css';
import TopNavigation from './components/common/TopNavigation/TopNavigation';
import Banner from './components/common/Banner/Banner';
import MatchesCarousel from './components/MatchesCarousel/MatchesCarousel';
import NewsSection from './components/NewsSection/NewsSection';
import SponsorsSection from './components/common/SponsorSection/SponsorsSection';
import Footer from './components/common/Footer/Footer';
import MatchesPage from './components/MatchesPage/MatchesPage';

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation handler
  const handleNavigate = (page) => {
    setCurrentPage(page);
    console.log(`Navigating to: ${page}`);

    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // You can add routing logic here later (e.g., with React Router)
  };

  // Render different pages based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'matches':
        return <MatchesPage onNavigate={handleNavigate} />;

      case 'home':
      default:
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
  };

  return renderPage();
}

export default App;