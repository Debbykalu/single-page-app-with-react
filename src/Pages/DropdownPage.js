import { useState } from "react";

import Dropdown from "../Components/Dropdown";

function DropdownPage() {

  const[selected, setSelected] = useState(null)

  const handleSelect = (option) => {
      setSelected(option)
  }
  const options = [
    {label: 'Select...', value: 'Select...'},
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Yellow', value: 'yellow'}
  ]
  return(
    <div className="flex ">
        <Dropdown options={options} value={selected} onChange={handleSelect}/>
    </div>
  )
}

export default DropdownPage;
