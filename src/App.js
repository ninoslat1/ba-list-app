import {lazy, Suspense} from 'react'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import "./style/page.css"
import { Routes, Link, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Explosive = lazy(() => import("./components/damage/Explosive"))
const Penetration = lazy(() => import("./components/damage/Penetration"))
const Mystic = lazy(() => import("./components/damage/Mystic"))
const RedWinter = lazy(() => import('./components/school/RedWinter'))
const Abydos = lazy(() => import('./components/school/Abydos'))
const Gehenna = lazy(() => import('./components/school/Gehenna'))
const Millennium = lazy(() => import('./components/school/Millennium'))
const Hyakkiyako = lazy(() => import('./components/school/Hyakkiyako'))
const Valkyrie = lazy(() => import('./components/school/Valkyrie'))
const Shanhaijing = lazy(() => import('./components/school/Shanhaijing'))
const Arius = lazy(() => import('./components/school/Arius'))
const SRT = lazy(() => import('./components/school/SRT'))

function App() {
  return (
    <div>
      <div className='my-BG'>
      <NavigationBar/>
      <Intro />
      <div className="text-center selection">
        <details>
          <summary><h4>Choose Category</h4></summary>
          <details>
            <summary><h4>Damage Type</h4></summary>
            <ul className="d-flex list-unstyled justify-content-center pt-2">
                <li>
                    <Link to="/explosive" className='text-decoration-none px-2 text-white'>Explosive</Link>
                </li>
                <li>
                    <Link to="/penetration" className='text-decoration-none px-2 text-white'>Penetration</Link>
                </li>
                <li>
                    <Link to="/mystic" className='text-decoration-none px-2 text-white'>Mystic</Link>
                </li>
            </ul>
          </details>
          <details>
          <summary><h4>School Origin</h4></summary>
          <ul className="list-unstyled justify-content-center pt-2 school-list">
                <li>
                    <Link to="/Red_Winter" className='text-decoration-none px-2 text-white'>Red Winter</Link>
                </li>
                <li>
                    <Link to="/Abydos" className='text-decoration-none px-2 text-white'>Abydos</Link>
                </li>
                <li>
                    <Link to="/Gehenna" className='text-decoration-none px-2 text-white'>Gehenna</Link>
                </li>
                <li>
                    <Link to="/Millennium" className='text-decoration-none px-2 text-white'>Millennium</Link>
                </li>
                <li>
                    <Link to="/Hyakkiyako" className='text-decoration-none px-2 text-white'>Hyakkiyako</Link>
                </li>
                <li>
                    <Link to="/Valkyrie" className='text-decoration-none px-2 text-white'>Valkyrie</Link>
                </li>
                <li>
                    <Link to="/Shanhaijing" className='text-decoration-none px-2 text-white'>Shanhaijing</Link>
                </li>
                <li>
                    <Link to="/Arius" className='text-decoration-none px-2 text-white'>Arius</Link>
                </li>
                <li>
                    <Link to="/SRT" className='text-decoration-none px-2 text-white'>SRT</Link>
                </li>
            </ul>
          </details>
        </details>
        </div>
      </div>
      <div>
        <Suspense fallback={
          <div className="d-flex flex-row justify-content-center align-items-center p-5">
            <div className="spinner-border p-1" role="status"></div>
          </div>}>
          <Routes>
            <Route path="/explosive" element={<Explosive />}/>
            <Route path="/penetration" element={<Penetration />}/>
            <Route path="/mystic" element={<Mystic />}/>

            <Route path='/Red_Winter' element={<RedWinter/>}/>
            <Route path='/Abydos' element={<Abydos/>}/>
            <Route path='/Gehenna' element={<Gehenna/>}/>
            <Route path='/Millennium' element={<Millennium/>}/>
            <Route path='/Hyakkiyako' element={<Hyakkiyako/>}/>
            <Route path='/Valkyrie' element={<Valkyrie/>}/>
            <Route path='/Shanhaijing' element={<Shanhaijing/>}/>
            <Route path='/Arius' element={<Arius/>}/>
            <Route path='/SRT' element={<SRT/>}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
