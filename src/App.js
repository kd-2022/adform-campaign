import './App.css';
import Campaign from './Component/Campaign'


function App() {

  const test = [{
    name: "abc"
  }];
  window.test = test;
  return (
    <div className="App">
      <Campaign />
    </div>
  );
}

export default App;
