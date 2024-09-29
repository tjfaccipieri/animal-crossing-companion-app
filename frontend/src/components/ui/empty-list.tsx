import nooks from '/nooks.png';

export function EmptyList() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[54dvh]">
      <p className="text-3xl font-bold text-amber-800">
        Nothing on the list...
      </p>
      <img src={nooks} alt="" />
    </div>
  );
}
