import logo from './logo.svg';
import './App.scss';
import Myform from './Myform';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <Myform />
      </header>
    </div>
  );
}

export default App;
