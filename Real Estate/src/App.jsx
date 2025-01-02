import About from './sections/About'
import Header from './sections/Header'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <div className='w-full overflow-hidden' >
        <Header />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
