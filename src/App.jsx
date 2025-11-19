import { Header } from './components/Header'
import { MainSection } from './components/MainSection'
import { VideoSection } from './components/VideoSection'
import { ComicSection } from './components/ComicSection'
import { Infografia } from './components/Infografia'
import { Juego } from './components/Juego'
import { BroteTexto } from './components/BroteTexto'
import SectionNavigator from './components/SectionNavigator'

import './App.css'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-fondo">
      <Header />
      <SectionNavigator />
      <div className=" max-w-[1200px] mx-auto mt-10 pb-10 px-10">
        <div className="fondo" >
          <div id="main-section">
            <MainSection className="z-9999"/>
          </div>
          <div id="video-section">
            <VideoSection className="z-9999" />
          </div>
        </div>
        <div id="comic-section">
          <ComicSection className="z-9999" />
        </div>
        <div id="infografia-section">
          <Infografia />
        </div>
        <div id="brote-section">
          <BroteTexto />
        </div>
        <div id="juego-section">
          <Juego />
        </div>
      </div>
    </div>
  )
}

export default App
