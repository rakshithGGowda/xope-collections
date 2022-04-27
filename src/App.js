import './App.css';
import 'animate.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import NavBar from "./components/NavBar/NavBar"
import LeftBar from './components/LeftBar/LeftBar'
import Hero from "./components/Hero/Hero"
import Neckless from './components/Neckless/Neckless';
import Bangles from './components/Bangles/Bangles';
import Earnings from './components/Earnings/Earnings'
import Rings from './components/Rings/Rings';

function App() {
    return ( 
    
    <div className = "App" >
        <LeftBar  />
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
            offset={0}
            speed={2.5}>
                <NavBar />
                <Hero/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#CDBF97' }} />
            <ParallaxLayer
            offset={1}
            speed={0.5}>
                <Neckless/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#EBD0B7' }} />
            <ParallaxLayer
            offset={2}
            speed={0.5}>
            <Bangles id = "bangles"/>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#D96771' }} />
            <ParallaxLayer
            offset={3}
            speed={0.5}>
            <Earnings/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#D1CBC3' }} />
            <ParallaxLayer
            offset={4}
            speed={0.5}>
            <Rings/>
            </ParallaxLayer>
        </Parallax>
        </div>
    );
}

export default App;