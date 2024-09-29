import { useState } from 'react';
import type { Bug } from '../../models/Bug';
import type { Fish } from '../../models/Fish';
import type { SeaCreature } from '../../models/SeaCreature';
import south from '/south.png';
import north from '/north.png';

interface CaptureCalendarProps {
  item: Fish | Bug | SeaCreature;
}

export function CaptureCalendar({ item }: CaptureCalendarProps) {
  const [hemisphere, setHemisphere] = useState<string>('south');

  
  function changeHemisphere(){
    hemisphere === 'south' ? setHemisphere('north') : setHemisphere('south')
  }

  return (
    <div className="flex flex-col flex-1 gap-2">
      <p className="capitalize card_attributes_title">
        {hemisphere} hemisphere - available at:
      </p>
      <div className="grid grid-cols-4 gap-3">
      <div className='flex border-2 rounded-lg cursor-pointer bg-amber-200 border-amber-950' onClick={changeHemisphere}>
        {hemisphere === 'south' ? <img src={south} alt="" className='block object-contain mx-auto my-auto w-44 aspect-square' /> : <img src={north} alt="" className='block object-contain mx-auto my-auto w-44 aspect-square' />}
      </div>
      <ul className="grid grid-cols-2 col-span-3 gap-2">
        <div className="flex flex-col gap-1">
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Jan</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shJan : item.nhJan}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Feb</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shFeb : item.nhFeb}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Mar</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shMar : item.nhMar}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Apr</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shApr : item.nhApr}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">May</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shMay : item.nhMay}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Jun</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shJun : item.nhJun}
            </span>
          </li>
        </div>
        <div className="flex flex-col gap-1">
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Jul</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shJul : item.nhJul}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Aug</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shAug : item.nhAug}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Sep</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shSep : item.nhSep}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Oct</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shOct : item.nhOct}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Nov</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shNov : item.nhNov}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Dec</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.shDec : item.nhDec}
            </span>
          </li>
        </div>
      </ul>
      </div>
    </div>
  );
}
