import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

export default function App() {
  const [color, setColor] = useState("olive")
  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor("red")}
        className="bg-red-600 text-white font-bold py-2 px-10 rounded-full"
        >red</button>
        <button 
        onClick={() => setColor("orange")}
        className="bg-orange-600 text-white font-bold py-2 px-10 rounded-full"
        >orange</button>
        <button 
        onClick={() => setColor("yellow")}
        className="bg-yellow-600 text-white font-bold py-2 pd- px-10 rounded-full"
        >yellow</button>
        <button 
        onClick={() => setColor("green")}
        className="bg-green-600 text-white font-bold py-2 px-10 rounded-full"
        >green</button>
        </div>
      </div>
    </div>
    
  )
}