import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components/layout/index';
import { About, Home, NotFound } from './pages/index';

const App = () => (
  <BrowserRouter>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
