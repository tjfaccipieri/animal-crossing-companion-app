import agiota from '/agiota.png';

export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto mt-4 animate-pulse h-[65dvh]">
      <img src={agiota} alt="" className="h-48" />
      <p className="text-amber-800 font-bold text-3xl">Loading...</p>
    </div>
  );
}
