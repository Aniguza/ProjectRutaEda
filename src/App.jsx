import { Header } from './components/Header'
import { MainSection } from './components/MainSection'
import { VideoSection } from './components/VideoSection'
import { ComicSection } from './components/ComicSection'
import { Infografia } from './components/Infografia'

import './App.css'
import './index.css'

import deco from './assets/images/flecha.png'

function App() {
  return (
    <div className="w-full min-h-screen bg-fondo">
      <Header />
      <div className=" max-w-[1200px] mx-auto mt-10 pb-10 px-10">
        <div >
          <MainSection className="z-9999"/>
          <VideoSection className="z-9999" />
          <div >
            {/* <img src={deco} alt="Decorative" className="absolute text-center right-50 w-240 " /> */}
          </div>
            
        </div>
        <ComicSection />
        <Infografia />
      </div>
    </div>
  )
}

export default App
