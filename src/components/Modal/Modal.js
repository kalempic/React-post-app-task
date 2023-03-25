import { useEffect } from "react";
import ReactDOM from "react-dom";
// import "./modalStyles.css";

function Modal({ isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          <div className="modal-content">Modal!</div>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
