import React from 'react'
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <header className="bg-linear-to-r from-pastelrojo via-pastelceleste to-pastelamarillo py-2">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>
      </div>
    </header>
  )
}