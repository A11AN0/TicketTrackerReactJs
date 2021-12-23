import React from 'react'
import Counter from '../Counter';

const Card = (props) => {
  const {
    name,
    role,
    id, 
  } = props.team;
  return (
    <div key={id}>
      <h2>Name:{name}</h2>
      <h2>Role:{role}</h2>
      <Counter />
    </div>
  )
}

export default Card;
