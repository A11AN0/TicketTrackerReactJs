import React, {useState} from 'react'

const Counter = () => {
  const [ticketNumber, setTicketNumber] = useState(0)
  return (
    <div>
      <button onClick={()=>setTicketNumber(ticketNumber+1)}>+</button>
      <button onClick={()=>setTicketNumber(ticketNumber > 0? ticketNumber-1 : 0)}>-</button>
      <h3>{ticketNumber}</h3>
    </div>
  )
}

export default Counter
