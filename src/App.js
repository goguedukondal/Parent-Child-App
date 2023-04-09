import './App.css';
// import A from './Components/A';
import A from './Components_1/A';
// import Parent from './Components2/Parent';
import Parent from './Components_2/Parent';

function App() {
  return (
    <div className="App">
      <div className='parent-child'>
      <A/>
      <Parent/>
      </div>
    </div>
  );
}

export default App;