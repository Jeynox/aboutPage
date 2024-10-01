import './App.css'
import {Routes , Route} from "react-router-dom"
import { Layout } from './pages/Layout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
