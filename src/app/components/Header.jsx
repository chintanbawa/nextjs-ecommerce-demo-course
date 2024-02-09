'use client'
import React from 'react'
import { useTheme } from 'next-themes'

const Header = () => {
  const {theme,setTheme}=useTheme()
  return (
    <div className='flex justify-between px-6 py-3 bg-secondary-1'>
        <h1 className='text-inverted text-2xl font-bold hover:scale-110'>E-COMMERCE</h1>
        <select className='w-[200px] bg-inverted p-1 rounded-md text-primary'
        value={theme}
        onChange={e=> setTheme(e.target.value)}
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="rose">Rose</option>
            <option value="purple">Purple</option>
        </select>
    </div>
  )
}

export default Header