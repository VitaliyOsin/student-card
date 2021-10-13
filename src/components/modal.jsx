import React from "react";
import "./modal.css";

const Modal = ({ label, show, handle }) => {
  if (show) {
    return (
      <div className="modal-card">
        <div className="modal show" tabIndex="1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{label}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handle}
                ></button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-link"
                  data-bs-dismiss="modal"
                  onClick={handle}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return "";
};

export default Modal;
