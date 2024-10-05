import { type ChangeEvent, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

interface TurnipPerDayProps {
  day: string
}

export function TurnipPerDay({day}: TurnipPerDayProps) {

  const [valueAM, setValueAM] = useState<string>('');
  const [valuePM, setValuePM] = useState<string>('');

  const storedValueAM = window.localStorage.getItem(`turnip-valueAM-${day}`);
  const storedValuePM = window.localStorage.getItem(`turnip-valuePM-${day}`);

  useEffect(() => {

    if (storedValueAM !== null) {
      setValueAM(storedValueAM);
    }
    if (storedValuePM !== null) {
      setValuePM(storedValuePM);
    }
  }, [day]);

  function addToStorage(event: ChangeEvent<HTMLInputElement>) {
    const period = event.target.name;
    const newValue = event.target.value;

    if (period === 'am') {
      setValueAM(newValue);
      window.localStorage.setItem(`turnip-valueAM-${day}`, newValue);
    } else {
      setValuePM(newValue);
      window.localStorage.setItem(`turnip-valuePM-${day}`, newValue);
    }
  }

  const [isSunday, setIsSunday] = useState(false);

  function cleanUpLocalStorage(day: string) {
    window.localStorage.removeItem(`turnip-valueAM-${day}`);
    window.localStorage.removeItem(`turnip-valuePM-${day}`);
  }

  useEffect(() => {
    const today = new Date();
    setIsSunday(today.getDay() === 0); // 0 represents Sunday

    const intervalId = setInterval(() => {
      const currentDay = new Date().getDay();
      setIsSunday(currentDay === 0);
    }, 5); // Check every day at midnight

    console.log(new Date().getDay());

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isSunday) {
      cleanUpLocalStorage(day);
    }
  }, [isSunday, day]);

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
          name="am"
          className="border-2 border-amber-950 px-2 py-0.5 disabled:bg-amber-800/40 bg-amber-200 text-amber-950 font-bold rounded-lg col-span-1 w-full pl-6"
          onChange={addToStorage}
          value={storedValueAM || ''}
        />
      </div>
      <div className="relative">
        <label htmlFor="" className="absolute top-2 left-2 text-amber-950">
          <FiMoon />
        </label>
        <input
          type="number"
          name="pm"
          className="border-2 border-amber-950 px-2 py-0.5 disabled:bg-amber-800/40 bg-amber-200 text-amber-950 font-bold rounded-lg col-span-1 w-full pl-6"
          onChange={addToStorage}
          value={storedValuePM || ''}
        />
      </div>
    </section>
  );
}
