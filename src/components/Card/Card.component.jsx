import React from 'react';
import './Card.styles.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}
        alt="cat image"
      />
      <h2>{props.cat.name}</h2>
      <p>{props.cat.email}</p>
    </div>
  )
}

export default Card;