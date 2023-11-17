import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./Pages/Homepage"
import News from "./Pages/News"
import Players from "./Pages/Players"
import SingleNews from "./Pages/SingleNews"
import Error from "./Pages/Error"
import Sponsors from "./Pages/Sponsors"
import PageLayout from './components/PageLayout'
import Schedule from './Pages/Schedule'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path='/' exact element={<Homepage />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:slug' element={<SingleNews />} />
            <Route path='/players' element={<Players />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/sponsors' element={<Sponsors />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}



export default App
