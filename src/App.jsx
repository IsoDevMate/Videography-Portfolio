import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

const Cards = lazy(() => import('./pages/Cards.jsx'))

export default function App() {
  return (
    <Suspense fallback={<div className="route-fallback">SNR</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Suspense>
  )
}
