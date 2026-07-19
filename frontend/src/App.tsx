import { Route, Routes } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { Agenda } from './pages/Agenda'
import { TalkDetail } from './pages/TalkDetail'
import { Speakers } from './pages/Speakers'
import { SpeakerDetail } from './pages/SpeakerDetail'
import { Favorites } from './pages/Favorites'
import { Infos } from './pages/Infos'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="/talks/:talkId" element={<TalkDetail />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:speakerId" element={<SpeakerDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
