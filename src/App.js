import { useState } from "react";
import Dropdown from "./Components/Dropdown";

function App() {

  const[selected, setSelected] = useState(null)

  const handleSelect = (option) => {
      setSelected(option)
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Yellow', value: 'yellow'}
  ]
  return(
    <div>
        <Dropdown options={options} selected={selected} onSelect={handleSelect}/>
    </div>
  )
}

export default App;
