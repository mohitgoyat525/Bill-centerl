
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import HowItWork from './views/HowItWork';
import Service from './views/Service';
import Testinomials from './views/Testinomials';
import WhyUs from './views/WhyUs';
import Faq from './views/Faq';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/how' element={<HowItWork />} />
          <Route path='/service' element={<Service />} />
          <Route path='/testimonials' element={<Testinomials />} />
          <Route path='/why' element={<WhyUs />} />
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
