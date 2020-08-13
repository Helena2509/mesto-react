import React from 'react';
import editButton from '../images/editbutton.svg';
import api from '../utils/utils.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    });
  });

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((result) => {
      setCards(result);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <img
            className="profile__image"
            alt="Аватар вашего профиля"
            onClick={props.onEditAvatar}
            src={userAvatar}
          />
          <img className="profile__image-back" src={editButton} />
        </div>
        <div className="profile__streamer">
          <div className="profile__info">
            <h1 className="profile__author">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
            _id={card.id}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
