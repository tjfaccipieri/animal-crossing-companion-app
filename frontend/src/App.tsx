import 'react-responsive-modal/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { UserProvider } from './context/UserContext';
import { ArtsPage } from './pages/arts';
import { BugsPage } from './pages/bugs';
import { FishesPage } from './pages/fishes';
import { FossilsPage } from './pages/fossils';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { SeaCreaturesPage } from './pages/sea-creatures';
import { Villagers } from './pages/villagers';

export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bugs" element={<BugsPage />} />
            <Route path="/fishes" element={<FishesPage />} />
            <Route path="/sea-creatures" element={<SeaCreaturesPage />} />
            <Route path="/fossils" element={<FossilsPage />} />
            <Route path="/arts" element={<ArtsPage />} />
            <Route path="/villagers" element={<Villagers />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
