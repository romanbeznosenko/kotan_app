import logo from './logo.svg';
import './App.css';
import TopNavigation from './components/common/TopNavigation/TopNavigation';
import Banner from './components/common/Banner/Banner';
import Match from './components/Match/Match';
import GenericCarousel from './components/common/GenericCarousel/GenericCarousel';

// Import mock data
import { matchesData } from './components/Match/mockData';

function App() {
  // Generate Match components from mock data
  const matchComponents = matchesData.map((match) => (
    <Match 
      key={match.id}
      match_date={match.match_date}
      match_address={match.match_address}
      match_background={match.match_background}
      home_team_logo={match.home_team_logo}
      away_team_logo={match.away_team_logo}
    />
  ));

  return (
    <>
      <TopNavigation>
      </TopNavigation>
      
      <div className="App">
        <Banner/>
        
        {/* Single Match Example */}
        {/* <Match/> */}
        
        {/* Inline Matches Carousel - shows one match at a time with manual navigation */}
        <GenericCarousel />
        
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;