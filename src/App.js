import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AlertProvider } from './components/context/alert/AlertContext';
import { GithubProvider } from './components/context/github/GithubContext';
import { Alert, Footer, Navbar } from './components/layout/index';
import { About, Home, NotFound, User } from './pages/index';

const App = () => (
  <GithubProvider>
    <AlertProvider>
      <BrowserRouter>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <main className='container mx-auto px-3 pb-12'>
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AlertProvider>
  </GithubProvider>
);

export default App;
