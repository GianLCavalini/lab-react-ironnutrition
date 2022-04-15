import React from 'react';
import Modal from './Modal';
import {useState} from "react";



function AddFood() {
    
    const [openModal, setOpenModal] = useState(false);
    
    return (  
        <>
            <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>New Food +</button>
            {openModal && <Modal closeModal={setOpenModal}/>}
        
        </>
    );
}

export default AddFood;