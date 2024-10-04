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
              {hemisphere === 'south' ? item.sh_jan : item.nh_jan}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Feb</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_feb : item.nh_feb}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Mar</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_mar : item.nh_mar}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Apr</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_apr : item.nh_apr}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">May</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_may : item.nh_may}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Jun</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_jun : item.nh_jun}
            </span>
          </li>
        </div>
        <div className="flex flex-col gap-1">
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Jul</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_jul : item.nh_jul}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Aug</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_aug : item.nh_aug}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Sep</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_sep : item.nh_sep}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Oct</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_oct : item.nh_oct}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Nov</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_nov : item.nh_nov}
            </span>
          </li>
          <li className="flex overflow-hidden text-center border-2 rounded bg-amber-950 border-amber-950">
            <span className="w-1/4 px-2">Dec</span>{' '}
            <span className="flex-1 bg-amber-200 text-amber-950">
              {hemisphere === 'south' ? item.sh_dec : item.nh_dec}
            </span>
          </li>
        </div>
      </ul>
      </div>
    </div>
  );
}
