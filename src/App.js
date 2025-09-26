import logo from './logo.svg';
import './App.css';
import TopNavigation from './components/common/TopNavigation/TopNavigation';
import Banner from './components/common/Banner/Banner';
import Match from './components/Match/Match';

function App() {
  return (
    <><TopNavigation>

    </TopNavigation><div className="App">
      <Banner/>
      <Match/>
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
      </div></>
  );
}

export default App;
