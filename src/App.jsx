import { Header } from './components/Header'
import { MainSection } from './components/MainSection'
import { VideoSection } from './components/VideoSection'
import { ComicSection } from './components/ComicSection'
import { Infografia } from './components/Infografia'
import { Juego } from './components/Juego'

import './App.css'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-fondo">
      <Header />
      <div className=" max-w-[1200px] mx-auto mt-10 pb-10 px-10">
        <div className="fondo" >
          <MainSection className="z-9999"/>
          <VideoSection className="z-9999" />
        </div>
        <ComicSection className="z-9999" />
        <Infografia />
        <Juego />
      </div>
    </div>
  )
}

export default App
