

import { useCallback, useState } from 'react'
import './App.css'
import { useEffect } from 'react'



function App() {
  const [length , setlength] = useState(8)
  const [character , setcharacter] = useState(false)
  const [number , setnumber] = useState(false)
  const [symbols, setsymbols] = useState(false)
    const [pasward , setpasward] = useState("")
    const pasgenerater = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+= "0123456789"
if(symbols) str+= "_?/>.<,!@#$%^&*"
for(let i=1 ; i<= length ; i++ ){
  let char = Math.floor(Math.random() *str.length +1)
  pass += str.charAt(char)
  setpasward(pass)
}
    }, [length,character,symbols,setpasward,])
    useEffect(()=>{
      pasgenerater()
    },[length,character,symbols, setpasward])
  return (
    <>
   
      <div className='  w-full max-w-sm bg-sky-300 m-auto overflow-hidden shadow rounded-md py-3 px-4 my-4'>

        <div  className='flex shadow overflow-hidden mb-4 '>
          <h1 className='text-sm flex mt-5 overflow-hidden text-white m-auto mx-3  bg-black'>PASWARD GENERATER</h1>
            <input className='outline-none w-full rounded-md py-3 px-3 mt-4'
             type="pasward"
             value={pasward}
              placeholder='pasward generater' 
              readOnly />  
        </div>
       <div className='flex items-center g-x-1 '> <input className='cursor-pointer flex' 
             type="range"
             max={20}
             min={8}
             value={length}
            onChange={(e)=>{
setlength((e.target.value))
            }}
             /></div> <label className='flex text-black'>length:{length}</label>
              <div className='flex items-center g-x-1'><input  
             type='checkbox'
        defaultChecked={number}
            onChange={()=>{
            setnumber((prev) => !prev)
            }}
             /></div> <label className='flex text-black'>characters</label>
              <div className='flex items-center g-x-1'><input  
             type='checkbox'
        defaultChecked={symbols}
            onChange={()=>{
            setsymbols((prev) => !prev)
            }}
             /></div> <label className='flex text-black'>symbols</label>
    </div>
    </>
  )
}

export default App
