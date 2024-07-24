import React, { useEffect, useState } from 'react'
import LghtButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'


export default function DarkMode() {
    const[theme , setTheme] = React.useState(
        localStorage.getItem("theme") ?
        localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement;
    console.log(element);

    useEffect(()=>{
        localStorage.setItem("theme" , theme)
        if(theme == "dark"){
            element.classList.add("dark")
        }else{
            element.classList.remove("dark")
        }
    })



  return (
    <div className='relative'>
        <img 
         onClick={()=>setTheme(theme=="dark" ? "light" : "dark")}
         src={LghtButton} alt=""
         className={`absolute right-0 z-10 w-12 cursor-pointer 
            ${theme == "dark" ? " opacity-0" : "opacity-100"}
            transition-all duration-300`}
        />

        <img 
         onClick={()=>setTheme(theme == "dark" ? "light" : "dark")}
         src={DarkButton} alt=""
         className={`w-12 cursor-pointer`}
        />
    </div>
  )
}
