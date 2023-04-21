
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addByOne, reset, subByOne } from './redux/action/actions';

function App() {

  const dispatch = useDispatch()
  const storeData = useSelector(state =>state.countReducer)
  const {value} = storeData
  console.log(storeData)

  const onIncreaseValue = ()=>{
    dispatch(addByOne())
  }

  const onReset = ()=>{
    dispatch(reset())
  }

  const onSubstract = ()=>{
    dispatch(subByOne())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{value}</h1>
        <div>
          <button type='button' onClick={onIncreaseValue}  style={{width:"50px", padding:"10px", borderRadius:"10px", fontSize:"25px", fontWeight:"bold", backgroundColor:"goldenrod"}}>+</button>
          <button type='button' onClick={onReset} style={{width:"150px", padding:"10px", borderRadius:"10px", fontSize:"25px", fontWeight:"bold", backgroundColor:"red", marginLeft:"10px", marginRight:"10px"}}>Reset</button>
          <button type='button' onClick={onSubstract} style={{width:"50px", padding:"10px", borderRadius:"10px", fontSize:"25px", fontWeight:"bold", backgroundColor:"goldenrod"}}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
