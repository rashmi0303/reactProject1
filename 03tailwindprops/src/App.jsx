import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/Card';

function App() {
 
  const obj1 ={
    userName: "Rashmi",
    course : "React"
  }

  const arr1 = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind is working!</h1>
      <Card val={obj1} userName="Rashmi" btnClick="clickMe" />
      <Card val={arr1} userName="AB" btnClick="visitMe" />
    </>
  );
}


export default App
