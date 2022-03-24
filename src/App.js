import './App.css';
import 'animate.css'

import NavBar from "./components/NavBar/NavBar"
import LeftBar from './components/LeftBar/LeftBar'
import Hero from "./components/Hero/Hero"
import Neckless from './components/Neckless/Neckless';


function App() {
    return ( <div className = "App" >
            <NavBar/>
            <LeftBar/>
            <Hero/>
            <Neckless/>
        </div>
    );
}

export default App;