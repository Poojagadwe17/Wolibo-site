import './App.css';
import EighthSection from './components/EighthSection';
import Home from './components/Home';
import HomeFifthSection from './components/HomeFifthSection';
import HomeFourthSection from './components/HomeFourthSection';
import HomeSecondSection from './components/HomeSecondSection';
import HomeThirdSection from './components/HomeThirdSection';
import SeventhSection from './components/SeventhSection';
import SixthSection from './components/SixthSection';

function App() {
  return (
    <div className="App">
    <Home/>
    <HomeSecondSection/>
    <HomeThirdSection/>
    <HomeFourthSection/>
    <HomeFifthSection/>
    <SixthSection/>
    <SeventhSection/>
    <EighthSection/>
    </div>
  );
}

export default App;
