import { Link } from 'react-router-dom';
import logo from '/acnh-logo.png';
import { FaHome, FaPaintBrush } from 'react-icons/fa';
import { FaBugs, FaHouse } from 'react-icons/fa6';
import { GiAmmoniteFossil, GiDoubleFish } from 'react-icons/gi';
import { SiShell } from 'react-icons/si';

export function Navbar() {
  return (
    <nav>
      <header className="bg-banner-acnh h-72 flex flex-col gap-4 items-center justify-center text-amber-950">
        <Link to='/'><img src={logo} alt="" className="w-72" /></Link>
        <ul className='flex justify-center items-center gap-8 font-semibold text-lg bg-amber-300 py-2 px-4 rounded-lg uppercase border-2 border-black border-dotted text-center'>
          <Link to='/' className='navbar_item'><FaHome /> Home</Link>
          <Link to='/villagers' className='navbar_item'><FaHouse /> Villagers</Link>
          <Link to='/bugs' className='navbar_item'><FaBugs /> Bugs</Link>
          <Link to='/fishes' className='navbar_item'><GiDoubleFish /> Fishes</Link>
          <Link to='/sea-creatures' className='navbar_item'><SiShell /> Sea Creatures</Link>
          <Link to='/fossils' className='navbar_item'><GiAmmoniteFossil /> Fossils</Link>
          <Link to='/arts' className='navbar_item'><FaPaintBrush /> Arts</Link>
        </ul>
      </header>
    </nav>
  );
}
