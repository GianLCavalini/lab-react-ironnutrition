import React from "react";

function Modal({closeModal}) {
    return ( 

        <div className="modalBackground">
            <div className="modalContainer is-active">
                     <div className="title">
                        <h1>New Food</h1>
                    </div>
                    <div className="body">
                    <input></input>
                    <input></input>
                    <input></input>


                    </div>    
                    <div className="footer"> 
                        <button>Save Chances</button>
                        <button onClick={() => {closeModal(false)}} id="cancelBtn">Cancel</button>       
                    </div>
             </div>
        </div>
                
            
        
     );
}

export default Modal;