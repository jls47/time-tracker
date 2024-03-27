import { useState, useEffect } from 'react'
import { BsRadioactive, BsClockHistory } from "react-icons/bs";
import CreateItem from './CreateItem'
import TrackedItem from './TrackedItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

  })

  const nuke = () => {
    localStorage.clear();
    window.location.reload();
  }

  const items = [];
  for(var i in localStorage) {
    console.log(i);
    if(i === "length") {
      break;
    }
    items.push(
    <TrackedItem 
    name={i}
    key={i}
    />);
  }
  console.log(items);

  const things = items.map(item => 
    <li key={item.key}>{item}</li>
  );

  return (
    <>
    <h1><BsClockHistory /></h1>
      <CreateItem></CreateItem>
      <ul style={{ listStyleType: 'none' }}>
        {things}
      </ul>
      <button onClick = {nuke}><BsRadioactive /></button>
    </>
  )
}

export default App
