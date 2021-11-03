
import './App.css';

import DropDown from './widgets/MultiSelect';
function App() {


  const select = (val) =>{
    console.log(val);
  }
  return (
    <div className="App">
      <DropDown option={["india", "pakisthan"]} select={select}/>
    </div>
  );
}

export default App;
