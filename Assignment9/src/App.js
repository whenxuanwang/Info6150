import { useState } from 'react'
import Home from './components/home'
import Footer from './components/footer'
import Header from './components/header'
import About from './components/about'

import './App.css';


function App() {
  const [routes, setRoutes] = useState(window.location.pathname)
  const handleRender = () => {
    switch (routes) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case '/':
        return <Home />
        case '/about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Header onChange={setRoutes} routes={routes} />
      <div className="content">
        {handleRender()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
