import React from "react";
import "./modal.css";

function Modal({ movie, toggleModal, status }) {
    return (
      <div className={`movieModal ${status ? "active" : undefined}`}>
        <div className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
        </div>
        <a href="#" onClick={toggleModal}>
          <iframe
            src={movie.video}
            width="1280"
            height="720"
            title={`${movie.title} | official Trailer`}
            frameBorder="0"
            allow="accelerometer; clipboard; encrypted-media; gyoscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </a>
      </div>
    );
  }
  

export default Modal;
