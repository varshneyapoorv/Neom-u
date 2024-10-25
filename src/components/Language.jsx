import { useState } from 'react'
import { GrLanguage } from 'react-icons/gr'

const Language = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleMenu = ()=>{
        setIsOn(!isOn)
    }
  return (
    <div className='relative'>
        <button onClick={toggleMenu} onMouseEnter={()=> setIsOn(true)} onMouseLeave={()=> setIsOn(false)} className="p-2 bg-gray-100 rounded-full text-black font-bold" >

              <GrLanguage />
        </button>
        {isOn && (
        <div
          className="absolute right-0 top-10 w-[150px] bg-white shadow-lg rounded-lg"
          onMouseEnter={() => setIsOn(true)}
          onMouseLeave={() => setIsOn(false)}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              English
            </li>
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              French
            </li>
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              Arabic
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Language
