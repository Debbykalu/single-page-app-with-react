import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Modal = ({ onCloseClick, children, actionBar }) => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);
  return ReactDOM.createPortal( 
        <div onClick={onCloseClick} className="fixed inset-0 bg-gray-300 opacity-85 ml-20 mr-20">
            <div className="fixed inset-40 p-10 bg-red-500 text-white text-1xl">
               <div className='flex flex-col justify-between h-full'> 
                    {children}
                    <div className='flex justify-end'>
                    {actionBar}
                    </div>
               </div>
            </div>
        </div>, 
        document.querySelector('.modal-container')
    );
}

export default Modal