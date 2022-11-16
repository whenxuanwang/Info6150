import './App.css';
import { TopHeader } from './components/top-header';
import MainCard from './components/main-card';
import AboutMe from './components/about-me';
import ExperienceComponent from './components/ExperienceComponent';
import FooterComponent from './components/footer-component';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <MainCard />
      <AboutMe />
      <ExperienceComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
