import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  function handleIncrement() {
    dispatch(increment());
  }
  
  function handleDecrement() {
    dispatch(decrement());
  }
  
  function handleReset() {
    dispatch(reset());
  }
  
  function handleIncByAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <div className="left">
        <h3>Count : {count}</h3>
      </div>
      <div className="right">
        <div className="one"><button onClick={handleIncrement}>+</button></div>
        <div className="two"><button onClick={handleDecrement}>-</button></div>
        <div className="three"><button onClick={handleReset}>Reset</button></div>
        <div className="four">
          <button onClick={handleIncByAmount}>Inc by Amount</button>
          <input
            type="number"
            value={amount}
            placeholder='Enter amount'
            onChange={(e)=> setAmount(e.target.value)}
          />
        </div>
      </div>
    </div> 
  )
}

export default App
