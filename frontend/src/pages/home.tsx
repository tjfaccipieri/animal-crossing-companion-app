import { useContext } from 'react';
import { ProgressDonateHome } from '../components/ui/progress-donate-home';
import { TurnipPerDay } from '../components/ui/turnip-per-day';
import { UserContext } from '../context/UserContext';

export function Home() {
  const { data: user } = useContext(UserContext);

  return (
    <div className="container mx-auto my-4">
      <h1 className="font-bold text-center text-4xl text-amber-950 font-custom tracking-wide">
        Animal Crossing New Horizons - Companion APP
      </h1>
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-2 px-3 py-2 border-2 rounded-lg bg-amber-400 w-fit border-amber-950 h-fit">
          <h2 className="font-mono text-xl font-bold text-center text-amber-950">
            Turnip Price
          </h2>
          <section className="grid grid-cols-3 overflow-hidden rounded-lg w-72">
            <h3 className="flex items-center justify-center font-bold bg-amber-950 text-amber-100">
              Buy for
            </h3>{' '}
            <input
              type="text"
              className="border-2 border-amber-950 py-0.5 bg-amber-200 text-amber-950 font-bold rounded-e-lg col-span-2 w-full text-center disabled:bg-amber-800/40 px-2"
            />
          </section>
          <TurnipPerDay day={'mon'} />
          <TurnipPerDay day={'tue'} />
          <TurnipPerDay day={'wed'} />
          <TurnipPerDay day={'thu'} />
          <TurnipPerDay day={'fri'} />
          <TurnipPerDay day={'sat'} />
        </div>
        <div className="col-span-2">
          <h2>Total donations for {user.username}</h2>
          <div className="grid gap-2">
            <ProgressDonateHome title="Bugs" count={user.totalDonatedBugs} total={80} />
            <ProgressDonateHome title="Fishes" count={user.totalDonatedFishes} total={80} />
            <ProgressDonateHome title="Sea Creatures" count={user.totalDonatedSeaCreatures} total={40} />
            <ProgressDonateHome title="Fossils" count={user.totalDonatedFossil} total={73} />
            <ProgressDonateHome title="Arts" count={user.totalDonatedArt} total={43} />
          </div>
        </div>
      </div>
    </div>
  );
}
