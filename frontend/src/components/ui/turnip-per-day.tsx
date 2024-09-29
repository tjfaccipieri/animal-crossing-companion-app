import { type ChangeEvent, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

interface TurnipPerDayProps {
  day: string
}

export function TurnipPerDay({day}: TurnipPerDayProps) {

  const [valueAM, setValueAM] = useState<string>('12')
  const [valuePM, setValuePM] = useState<string>('12')
  
  function addToStorage(period: string, event: ChangeEvent<HTMLInputElement>) {
    if(period === 'am') {
      setValueAM(event.target.value)
      window.localStorage.setItem(`turnip-valueAM-${day}`, valueAM)
    } else {
      setValuePM(event.target.value)
      window.localStorage.setItem(`turnip-valuePM-${day}`, valuePM)
    }
  }

  return (
    <section className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg w-72">
      <h3 className="flex items-center justify-center font-bold capitalize rounded-lg bg-amber-950 text-amber-100">
        {day}
      </h3>{' '}
      <div className="relative">
        <label htmlFor="" className="absolute top-2 left-2 text-amber-950">
          <FiSun />
        </label>
        <input
          type="number"
          className="border-2 border-amber-950 px-2 py-0.5 disabled:bg-amber-800/40 bg-amber-200 text-amber-950 font-bold rounded-lg col-span-1 w-full pl-6"
          onChange={(event) => addToStorage('am', event)}
        />
      </div>
      <div className="relative">
        <label htmlFor="" className="absolute top-2 left-2 text-amber-950">
          <FiMoon />
        </label>
        <input
          type="number"
          className="border-2 border-amber-950 px-2 py-0.5 disabled:bg-amber-800/40 bg-amber-200 text-amber-950 font-bold rounded-lg col-span-1 w-full pl-6"
          onChange={(event) => addToStorage('pm', event)}
        />
      </div>
    </section>
  );
}
