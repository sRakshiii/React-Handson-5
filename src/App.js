import './App.css';
import HoverComp from './HoverComp';
import ClickComp from './ClickComp';
import PureComp from './PureComp';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <ClickComp/>
      <HoverComp/>
      <br/>
      <h2>Pure Component</h2>
      <PureComp/>
    </div>
  );
}

export default App;
