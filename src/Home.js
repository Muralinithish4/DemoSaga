import React,{useState,useEffect} from 'react'

export default function Home() {
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);
    useEffect(()=>{
        console.log("useEffect is successfully executing!");
    })
  return (
    <>
    <h1>Counter1:{counter1}</h1>
    <h2>Counter2:{counter2}</h2>
    <button onClick={()=>setCounter1(counter1+1)}> Increament1 </button>
    <button  onClick={()=>setCounter2(counter2+1)}>Increament 2</button>
    </>
  )
}
