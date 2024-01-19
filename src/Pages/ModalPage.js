import Modal from "../Components/Modal";
import { useState } from "react";
import Button from '../Components/Button';

const ModalPage = () => {
    const[showModal, setShowModal] = useState(false)

    const handleModalClick = () => {
        setShowModal(true)
    }

    const closeModalClick = () => {
        setShowModal(false)
    }
    const actionBar = <Button>I accept</Button>
    const modal = <Modal onCloseClick={closeModalClick} actionBar={actionBar }>
        <p>You will need to agree to our terms and conditions All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </Modal>
  return (
    <div className="relative">
        <Button onClick={handleModalClick} className='bg-blue-500 text-white'>Open Modal</Button>
        {showModal && modal}
        <div>
            <h2 className="text-4xl mt-10 mb-10">Why do we use it?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
  )
}

export default ModalPage