import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* Background layer */}
      <ParticleBackground />
      
      {/* Main components */}
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
