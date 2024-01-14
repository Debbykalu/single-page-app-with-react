import React, {useEffect, useRef, useState} from 'react';
import { BiDownArrow } from "react-icons/bi";

const Dropdown = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
           if(!divEl.current.contains(event.target)){
              setIsOpen(false);
           }
        };

        document.addEventListener('click', handler, true)

    return () => {
        document.removeEventListener('click', handler)
    }

    }, [])
    const handleSelectClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }
    const renderedOptions = options.map((option, index) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.index}>
            {option.label}
        </div>
    })


  return (
    <div ref={divEl} className='w-48 relative'>
        <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleSelectClick}>
            {value?.label ||  'Select...'}

            <BiDownArrow />
            
        </div>
        {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;