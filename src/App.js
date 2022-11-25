import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import "./style/page.css"
import { Routes, Link, Route } from 'react-router-dom'
import Explosive from "./components/Explosive"
import Penetration from "./components/Penetration"
import Mystic from "./components/Mystic"

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
        <Routes>
          <Route path="/explosive" element={<Explosive />}/>
          <Route path="/penetration" element={<Penetration />}/>
          <Route path="/mystic" element={<Mystic />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
