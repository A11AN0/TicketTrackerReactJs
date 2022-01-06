import React, {useState} from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
  const [ticketNumber, setTicketNumber] = useState(0)
  return (
    <div className={`${styles.content}`}>
      <button onClick={()=>setTicketNumber(ticketNumber+1)}>+</button>
      <p>{`${ticketNumber} Tickets`}</p>
      <button className={styles.minus} onClick={()=>setTicketNumber(ticketNumber > 0? ticketNumber-1 : 0)}>-</button>
    </div>
  )
}

export default Counter
