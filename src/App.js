import './App.sass';
import Display from "./components/Display"

function App() {

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <Display />
      <footer>
        <h2>Code By: <a href="https://github.com/barretobruno411" target="_blank" rel="noreferrer">barretobruno411</a></h2>
      </footer>
    </div>
  );
}

export default App;
