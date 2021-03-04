import logo from './jasson rivera pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my name is Jasson Rivera, im gonna master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/jrivera282"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github link
        </a>
      </header>
    </div>
  );
}

export default App;
