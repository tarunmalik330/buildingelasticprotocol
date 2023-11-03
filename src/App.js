
import './App.css';
import React, { useEffect } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EcosystemPartners from "./components/EcosystemPartners";
import OurTeam from './components/OurTeam';
import Strategies from './components/Strategies';
import Start from './components/Start'
import CoreStrategies from './components/CoreStrategies';
import Header from './components/Header';
import Roadmap from './components/Roadmap';
import Amplify from './components/Amplify';
import Tokenomics from './components/Tokenomics';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200
      }
    );
    Aos.refresh()
  });
  return (
    <div>
      <Header />
      <Amplify />
      <CoreStrategies />
      <Tokenomics />
      <Start />
      <Strategies />
      <OurTeam />
      <EcosystemPartners />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
