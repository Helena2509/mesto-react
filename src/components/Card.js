import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element" key={props._id}>
      <img
        className="element__image"
        style={{ backgroundImage: `url(${props.link})` }}
        onClick={handleClick}
      />
      <div className="element__description">
        <p className="element__heading">{props.name}</p>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <p className="element__like-number">{props.likes}</p>
        </div>
      </div>
      <button type="button" className="element__delete-button" onClick={props.handleDelete}></button>
    </div>
  );
}

export default Card;
