import { useState } from 'react';
import { BiSolidRightArrow, BiSolidDownArrow  } from "react-icons/bi";

import '../Components/accordion.css';

const Accordion = ({ items }) => {
    const[expandedIndex, setExpandedIndex] = useState(-1)

    const handleIndexClick = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex){
                return -1;
            }else{
                return nextIndex;
            }
        })
            
        }
   
    const accordionItems = items.map((item, index) => {
       const isExpanded = index === expandedIndex;

    

       const icon = <span>{isExpanded ? <BiSolidDownArrow /> : <BiSolidRightArrow />}</span>
        return(
            <div className='items' key={item.id}>
                <div onClick={() => handleIndexClick(index)} className='flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer' >
                    <h4>{item.label}</h4>
                    {icon}
                    </div>
                {isExpanded && <div><p>{item.content}</p></div>}
            </div>
        )
    })
  return (
    <div>
        <div className='border-x border-t rounded'>{accordionItems}</div>
    </div>
  )
}

export default Accordion