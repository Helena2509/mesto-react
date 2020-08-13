import React from 'react';

function PopupWithImage(props) {

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        props.onClose();
      }
    }

    function closeByClick(evt) {
      if (evt.target.classList.contains("popup__overlay-black")) {
        props.onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", closeByClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", closeByClick);
    };
  }, [props.isOpen]);

  return (
<>
  <div className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`}>
    <div className="popup__case">
      <img className="popup__image" 
      // style={{ backgroundImage: `url(${props.card.link})` }}
       />
      <p className="popup__description">
       {/* {props.card.name} */}
        </p>
      <button
        type="button"
        className="popup__close-button popup__close-button_type_image"  onClick={props.onClose}
      ></button>
    </div>
    <div className="popup__overlay-black popup__overlay-black_type_image"></div>
  </div>
  </>
  );
}

export default PopupWithImage;
