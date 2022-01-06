import React from 'react'
import Counter from '../Counter';
import styles from './Card.module.scss'

const Card = (props) => {
  const {
    name,
    role,
    id, 
  } = props.team;

  const randomColour=()=>{
    return `hsla(${~~(360 * Math.random())},70%,60%,0.2)`
  }

  return (
    <div key={id} className={styles.cardBody} style={{backgroundColor: randomColour()}} >
      <h2>{name}</h2>
      <h4>{role}</h4>
      <Counter />
    </div>
  )
}

export default Card;
