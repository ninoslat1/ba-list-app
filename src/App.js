import {lazy, Suspense} from 'react'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import "./style/page.css"
import { Routes, Link, Route } from 'react-router-dom'

const Student = lazy(() => import('./components/student'))

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
                    <Link to="/Explosive" className='text-decoration-none px-2 text-white'>Explosive</Link>
                </li>
                <li>
                    <Link to="/Penetration" className='text-decoration-none px-2 text-white'>Penetration</Link>
                </li>
                <li>
                    <Link to="/Mystic" className='text-decoration-none px-2 text-white'>Mystic</Link>
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
            <Route path="/Explosive" element={
              <Student style={{ color: '#DC4C64' }} type={'damageType'} value={'Explosive'}/>
            }/>
            <Route path="/Penetration" element={
              <Student style={{ color: '#E4A11B'}} type={'damageType'} value={'Penetration'}/>
            }/>
            <Route path="/Mystic" element={
              <Student style={{color: '#54B4D3'}} type={'damageType'} value={'Mystic'}/>
            }/>

            <Route path='/Red_Winter' element={
              <Student style={{color: '#DC4C64'}} type={'school'} value={'Red Winter'}/>
            }/>
            <Route path='/Abydos' element={
              <Student style={{color: '#3B71CA'}} type={'school'} value={'Abydos'}/>
            }/>
            <Route path='/Gehenna' element={
              <Student style={{color: '#54B4D3'}} type={'school'} value={'Gehenna'}/>
            }/>
            <Route path='/Millennium' element={
              <Student style={{color: 'white'}} type={'school'} value={'Millennium'}/>
            }/>
            <Route path='/Hyakkiyako' element={
              <Student style={{color: '#DC4C64'}} type={'school'} value={'Hyakkiyako'}/>
            }/>
            <Route path='/Valkyrie' element={
              <Student style={{color: 'white'}} type={'school'} value={'Valkyrie'}/>
            }/>
            <Route path='/Shanhaijing' element={
              <Student style={{color: 'grey'}} type={'school'} value={'Shanhaijing'}/>
            }/>
            <Route path='/Arius' element={
              <Student style={{color: '#477eb0'}} type={'school'} value={'Arius'}/>
            }/>
            <Route path='/SRT' element={
              <Student style={{color: '#3B71CA'}} type={'school'} value={'SRT'}/>
            }/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
