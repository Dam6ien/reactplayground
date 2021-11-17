import { useState } from "react";
import Modal from './Modal';
import Backdrop from "./Backdrop";

function Todo(props){

    const [modalOpen, setModalOpen] = useState(false);

// We are creating a function here that will be used below when the button click

function deleteHandler(){
setModalOpen(true);
}

function closeModalHandler(){
    setModalOpen(false);
}

return(
    <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
    <button className='btn' onClick={deleteHandler}>Delete</button> 
    </div>
    {modalOpen && <Modal onClick={closeModalHandler}/>}
    {modalOpen && <Backdrop onClick={closeModalHandler}/>}
  </div>
)
}

export default Todo;