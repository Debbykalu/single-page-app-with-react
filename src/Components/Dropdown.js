import React, {useState} from 'react'

const Dropdown = ({options, selected, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelectClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onSelect(option)
    }
    const renderedOptions = options.map((option, index) => {
        return <div onClick={() => handleOptionClick(option)} key={option.index}>
            {option.label}
        </div>
    })


  return (
    <div>
        <div onClick={handleSelectClick}>
            {selected?.label ||  'Select...'}
            
        </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown