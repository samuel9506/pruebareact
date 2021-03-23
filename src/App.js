import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola <code>App</code> Mi aplicacion React
        </p>

 <Button color="primary">Hello World</Button>;

      </header>
    </div>
  );
}

export default App;
