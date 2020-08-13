import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
    setIsImagePopupOpen(!isImagePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              type="text"
              className="form__input form__input_name"
              id="name-input"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="form__input-error" id="name-input-error"></span>
          </label>
          <label className="form__field">
            <input
              type="text"
              className="form__input form__input_description form__input_type_bottom"
              id="description-input"
              required
              minLength="2"
              maxLength="200"
            />
            <span
              className="form__input-error"
              id="description-input-error"
            ></span>
          </label>
          <button
            className={`form__submit-button form__submit-button_type_profile`}
          >
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              type="text"
              className="form__input form__input_title"
              id="title-input"
              placeholder="Название"
              required
              minLength="1"
              maxLength="30"
            />
            <span className="form__input-error" id="title-input-error"></span>
          </label>
          <label className="form__field">
            <input
              type="url"
              className="form__input form__input_link"
              id="link-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error" id="link-input-error"></span>
          </label>
          <button className="form__submit-button form__submit-button_type_place">
            Создать
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              type="url"
              className="form__input form__input_avatar"
              id="avatar-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error" id="avatar-input-error"></span>
          </label>
          <button className="form__submit-button form__submit-button_type_avatar">
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithImage
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
