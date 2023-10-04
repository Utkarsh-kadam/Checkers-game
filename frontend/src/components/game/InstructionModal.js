import React from "react";
import Modal from "react-modal";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Background color behind the modal
      },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "3px solid #000",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "rgb(222, 233, 233)",
            maxWidth: "90%", // Limit the maximum width
            width: "100%", 
            maxHeight: "90vh", // Limit the maximum height to 90% of the viewport height
            overflowY: "auto",

            
        }
};

Modal.setAppElement("#root"); // Set the root element for the modal

function InstructionsModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Instructions"
    >
      <h2>Instructions</h2>
      <p>
      <strong>Controls</strong>
        <br/>
        First click on checker you want to move, then click on position you want your checker to be
        <br/>
        <strong>Rules</strong>
      <br/>
            1. It's 2 player game, If a player's circle is full, it is their turn.
            <br/>
            2. Players get one move per turn and can move only diagonally forward .
            <br/>
            3. A checker is kinged when it reaches the opposite end of the board.
            <br/>
            4. Only a king can make single jump going forward and backward.
            <br/>
            </p>
                
      <button className="button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default InstructionsModal;
