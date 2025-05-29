import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  
  const pwdGenerator = useCallback (() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numAllowed) str+= "0123456789"
      if(charAllowed) str+= "!@#$%^&*_-=+[]{}~`"

      for (let index = 1; index < length; index++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char) 
      }
      console.log("password", pass)
      setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword ])

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
  }, [length, numAllowed, charAllowed, setPassword ])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 8)
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(( ) => {
    pwdGenerator()
  },[length, numAllowed, charAllowed, pwdGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-700'>
        <h1 className='text-white text-center text-3xl py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 bg-white text-gray-900' placeholder='Password' readOnly  ref={passwordRef}></input>
          <button className='outline-none bg-green-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} className='cursor-pointer' value={length} onChange={(e) => {setLength(e.target.value)}}></input>
            <label className='text-white'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="numInput" onChange={() => { setNumAllowed((prev) => !prev) }}></input>
            <label className='text-white'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => { setCharAllowed((prev) => !prev) }}></input>
            <label className='text-white'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
