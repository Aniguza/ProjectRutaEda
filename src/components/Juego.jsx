import React from 'react'

export const Juego = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-momo text-pastelceleste mb-8 text-center">Es hora de jugar</h1>
      <div className="w-full max-w-4xl ">
        <div className="relative w-full h-full" style={{ paddingBottom: '58.5%' }}>
          <iframe 
            frameBorder="0" 
            src="https://itch.io/embed-upload/15553124?color=99c8e6" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full"
          >
            <a href="https://wisgames.itch.io/misin-burbujas">Play Misión Burbujas on itch.io</a>
          </iframe>
        </div>
      </div>
    </div>
  )
}
