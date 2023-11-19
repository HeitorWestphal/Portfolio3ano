import logo from './WAAVE.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
         WAAVE
        </p>
        <a
          className="WAAVE-GitHub"
          href="https://github.com/HeitorWestphal/IAmuitoPika/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          WAAVE é uma IA para facilitar a utilização de controles de mídia
        </a>
        <br></br>
        <p>Clique no link para ir para o GitHub</p>
      </header>
    </div>
  );
}

export default App;