import React from 'react';
import editButton from '../images/editbutton.svg';
import api from '../utils/utils.js';
import Card from './Card.js';
import { CurrentUserContext } from './CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((result) => {
      setCards(result);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if(!isLiked) {
      api.setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
    } else {
      api.deleteLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((newCard) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <img
            className="profile__image"
            alt="Аватар вашего профиля"
            onClick={props.onEditAvatar}
            src={currentUser ? currentUser.avatar : ""}
          />
          <img className="profile__image-back" src={editButton} />
        </div>
        <div className="profile__streamer">
          <div className="profile__info">
            <h1 className="profile__author">{currentUser ? currentUser.name : ""}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser ? currentUser.about : ""}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
          card={card}
          handleDelete={props.handleDelete}
          onCardClick={props.onCardClick}
          onCardLike={props.handleCardLike}
          onCardDelete={props.handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
