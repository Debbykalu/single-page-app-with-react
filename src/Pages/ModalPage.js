import Modal from "../Components/Modal";
import { useState } from "react";
import Button from '../Components/Button';

const ModalPage = () => {
    const[showModal, setShowModal] = useState(false)

    const handleModalClick = () => {
        setShowModal(true)
    }
  return (
    <div>
        <Button onClick={handleModalClick}>Open Modal</Button>
        {showModal && <div><Modal /></div>}
        
    </div>
  )
}

export default ModalPage