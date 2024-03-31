import About from './sections/about';
import './App.css';
import Skills from './sections/skills';
import Project from './sections/projects';
import Connect from './sections/connect';
import AnimatedCursor from "react-animated-cursor"
import Cursor from './components/cursor';
import CustomCursor from './components/customCursor';
import GooeyCursor from './components/gooCursor';
import SlidingTape from './components/slidingTape';
import ScrollPathFollower from './components/svgPath';

function App() {
  return (
    <div className="App">
    <Cursor />
    <ScrollPathFollower />
    <About />
    <Skills />
    <SlidingTape />
    <Project />
    <Connect />
    </div>
  );
}

export default App;
