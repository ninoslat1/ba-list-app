import {lazy, Suspense} from 'react'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import "./style/page.css"
import { Routes, Link, Route } from 'react-router-dom'

const Explosive = lazy(() => import("./components/Explosive"))
const Penetration = lazy(() => import("./components/Penetration"))
const Mystic = lazy(() => import("./components/Mystic"))

function App() {
  return (
    <div>
      <div className='my-BG'>
      <NavigationBar/>
      <Intro />
      <div className="text-center selection">
            <h2 className="head">Choose Damage Type</h2>
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
        </div>
      </div>
      <div>
        <Suspense fallback={<div><h1 className='text-center p-3'>Loading</h1>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div></div>}>
          <Routes>
            <Route path="/explosive" element={<Explosive />}/>
            <Route path="/penetration" element={<Penetration />}/>
            <Route path="/mystic" element={<Mystic />}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
