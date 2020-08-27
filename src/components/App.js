import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import api from '../utils/utils.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api.setLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      });
    } else {
      api.deleteLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [isDeletePopupOpen, setIisDeletePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState();

  function handleUpdateUser(name, desc) {
    api.editUserInfo(name, desc)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  function handleAddPlaceSubmit(title, link) {
    api.addCard(title, link)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatarInfo(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  function handleDeleteClick() {
    setIisDeletePopupOpen(!isDeletePopupOpen);
  }

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

  function closeAllPopupsEscOverlay () {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    function closeByClick(evt) {
      if (evt.target.classList.contains("popup__overlay-black")) {
        closeAllPopups();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", closeByClick);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", closeByClick);
    };
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          handleDelete={handleDeleteClick}
          onCardClick={handleCardClick}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />

        <Footer />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          closeEscOverlay={closeAllPopupsEscOverlay}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          closeEscOverlay={closeAllPopupsEscOverlay}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          closeEscOverlay={closeAllPopupsEscOverlay}
        />

        <PopupWithImage
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          closeEscOverlay={closeAllPopupsEscOverlay}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
