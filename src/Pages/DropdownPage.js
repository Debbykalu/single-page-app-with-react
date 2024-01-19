import { useState } from "react";

import Dropdown from "../Components/Dropdown";

function DropdownPage() {

  const[selected, setSelected] = useState(null)

  const handleSelect = (option) => {
      setSelected(option)
  }
  const options = [
    {label: 'Select...', value: 'Select...'},
    {label: 'React', value: 'react'},
    {label: 'Angular', value: 'angular'},
    {label: 'Javascript', value: 'javascript'}
  ]
  return(
    <div className="flex ">
        <Dropdown options={options} value={selected} onChange={handleSelect}/>
    </div>
  )
}

export default DropdownPage;
