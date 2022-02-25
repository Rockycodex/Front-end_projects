
import React, { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);
  const [userCount, getUserCount] = useState(0);
  //Increment method
  const handleIncrement = () => {
    setCounter(counter + userCount);
  }

  //Decrement method
  const handleDecrement = () => {
    setCounter(counter - userCount);
  }

  return (
    <>

      <h2 style={{
        textAlign: 'center'
      }}>Check this counter App!</h2>
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          <h5 >Set the counter value?</h5>

          <input name='getCounter' onChange={event => getUserCount(Number.parseInt(event.target.value))}></input>
          <button>Set counter</button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: '200%',
          marginLeft: '35%'


        }}>
          <button style={{
            fontSize: '50%',
            position: 'relative',
            top: '20vh',
            marginRight: '5px',
            backgroundColor: '#278021',
            color: 'white',


          }}
            onClick={handleIncrement} title="I will increase the value">Increment</button>
          <div style={{
            backgroundColor: '#212010',
            height: '80px',
            width: '120px',
            textAlign: 'center',
            paddingBottom: '2%',
            color: 'white'

          }}
          >{counter}</div>
          <button style={{
            fontSize: '50%',
            position: 'relative',
            top: '20vh',
            marginLeft: '5px',
            backgroundColor: 'red',
            color: 'white',
          }}
            onClick={handleDecrement} title="I will decrease the value">Decrement</button>
        </div>
        <div >

        </div>
      </div>

    </>
  )
}


export default App;