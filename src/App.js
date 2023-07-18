import './App.css';
import AnnoyingDog from './components/annoyingDog';
import Dogs from './components/dogs';
// import Person from "./components/person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnnoyingDog />
        <div>
          <span>Hi Kayla </span>
          {/* <span className='App-logo'>👋</span> */}
        </div>
        {/* <div>
          <Person who="lyra"/>
          <Person who="ethan"/>
        </div> */}
        <Dogs />
      </header>
    </div>
  );
}

export default App;
