import React from 'react';
import './CardList.styles.css'
import { Card } from '../index';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {
        props.cats.map((cat) => {
          return <Card key={cat.id} cat={cat} />
        })
      }
    </div>
  )
}

export default CardList