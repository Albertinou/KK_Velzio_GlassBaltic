import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Homepage from "./Pages/Homepage"
import News from "./Pages/News"
import Players from "./Pages/Players"
import SingleNews from "./Pages/SingleNews"
import Error from "./Pages/Error"
import Sponsors from "./Pages/Sponsors"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={ <Homepage /> }/>
        <Route path='/news' element={ <News/> }/>
        <Route path='/players' element={ <Players /> }/>
        <Route path='/sponsors' element={ <Sponsors /> }/>
        <Route path='/news/:slug' element={ <SingleNews /> }/>
        <Route path='*' element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  )
}



export default App
