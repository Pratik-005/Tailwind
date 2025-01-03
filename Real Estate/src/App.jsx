import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './sections/About'
import Header from './sections/Header'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <div className='w-full overflow-hidden' >
        <ToastContainer />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
