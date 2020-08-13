import React from 'react';

function PopupWithForm(props) {
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
    <div
    className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}
  >
    <div className="popup__container">
      <h2 className={`popup__heading popup__heading_type_${props.name}`}>
        {props.title}
      </h2>
      <form className={`form form_type_${props.name}`} noValidate>
        {props.children}
      </form>
      <button
        type="button"
        className={`popup__close-button popup__close-button_type_${props.name}`}
        onClick={props.onClose}
      ></button>
    </div>
    <div className={`popup__overlay-black popup__overlay-black_type_${props.name}`}></div>
  </div>
{/* 
  <div className="popup popup_type_image">
    <div className="popup__case">
      <img className="popup__image" />
      <p className="popup__description"></p>
      <button
        type="button"
        className="popup__close-button popup__close-button_type_image"
      ></button>
    </div>
    <div className="popup__overlay-black popup__overlay-black_type_image"></div>
  </div>

  <div className="popup popup_type_delete">
    <div className="popup__box">
      <h2 className="popup__heading popup__heading_type_delete">
        Вы уверены?
      </h2>
      <button className="form__submit-button form__submit-button_type_delete">
        Да
      </button>
      <button
        type="button"
        className="popup__close-button popup__close-button_type_delete"
      ></button>
    </div>
    <div className="popup__overlay-black popup__overlay-black_type_delete"></div>
  </div> */}
  </>
  );
}

export default PopupWithForm;
