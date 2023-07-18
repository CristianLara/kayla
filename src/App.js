import './App.css';
import Person from "./components/person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><span>Hi Kayla </span><span className='App-logo'>👋</span></div>
        <div>
          <Person who="lyra"/>
          <Person who="ethan"/>
        </div>
      </header>
    </div>
  );
}

export default App;
