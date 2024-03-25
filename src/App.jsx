import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CreateItem from './CreateItem'
import TrackedItem from './TrackedItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

  })

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
      <h1>Time Tracker</h1>
      <CreateItem></CreateItem>
      <ul style={{ listStyleType: 'none' }}>
        {things}
      </ul>
    </>
  )
}

export default App
