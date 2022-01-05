import React from 'react'
import Counter from '../Counter';
import styles from './Card.module.scss'

const Card = (props) => {
  const {
    name,
    role,
    id, 
  } = props.team;
  return (
    <div key={id} className={styles.cardBody} >
      <h2>{name}</h2>
      <h4>{role}</h4>
      <Counter />
    </div>
  )
}

export default Card;
