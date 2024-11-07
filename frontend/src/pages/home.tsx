import { ProgressDonateHome } from '../components/ui/progress-donate-home';
import { TurnipPerDay } from '../components/ui/turnip-per-day';
import { useQuery } from '@tanstack/react-query';
import type { User } from '../models/User';
import construction from '/gyroid.webp';

export function Home() {
  const { data, isLoading } = useQuery<User>({
    queryKey: ['home'],
    queryFn: async () => {
      const resp = await fetch(`http://localhost:8080/users/${localStorage.getItem('userId')}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
      const data = resp.json();
      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 1 dia completo, em milissegundos
  });

  if (!data) {
    return null
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-8 mt-8">
        <p className="font-bold text-center text-2xl text-amber-950">
          This page is under construction and awaiting donations from our
          residents. Please use the navbar so our Dodos can take you somewhere
          more useful.
        </p>
        <img src={construction} alt="" />
      </div>
    );
  }

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
          <h2>Total donations for {data.username}</h2>
          <div className="grid gap-2">
            <ProgressDonateHome title="Bugs" count={data.totalDonatedBugs} total={80} />
            <ProgressDonateHome title="Fishes" count={data.totalDonatedFishes} total={80} />
            <ProgressDonateHome title="Sea Creatures" count={data.totalDonatedSeaCreatures} total={40} />
            <ProgressDonateHome title="Fossils" count={data.totalDonatedFossil} total={73} />
            <ProgressDonateHome title="Arts" count={data.totalDonatedArt} total={43} />
          </div>
        </div>
      </div>
    </div>
  );
}
