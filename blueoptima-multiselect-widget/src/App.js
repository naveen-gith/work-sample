
import './App.css';

import DropDown from './widgets/MultiSelect/MultiSelect';
function App() {


  const select = (val) =>{
    console.log(val);
  }
  return (
    <div className="App">
      <div className="menu-container">
     
      <div className="menu-icons">
        <div className="minimize"></div>
        {/* <div className="two-arrow-icon"></div> */}
        <div className="open-iocn"></div>
        {/* <div className="expand"></div> */}
      </div>
      <div>
      <h3>Locations</h3>
      </div>
      </div>
      <DropDown option={["india", "pakisthan"]}  placeholder={"Filter locations"} select={select}/>
    </div>
  );
}

export default App;
