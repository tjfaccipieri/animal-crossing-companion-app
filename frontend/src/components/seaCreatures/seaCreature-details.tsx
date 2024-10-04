import { useContext } from 'react';
import type { SeaCreature } from '../../models/SeaCreature';
import { CaptureCalendar } from '../ui/capture-calendar';
import { SwitchDonate } from '../ui/switch-donate';
import coruja from '/coruja.webp';
import { UserContext } from '../../context/UserContext';

interface SeaCreaturesProps {
  seaCreature: SeaCreature;
}

export function SeaCreaturesDetails({ seaCreature }: SeaCreaturesProps) {
  const {data: user} = useContext(UserContext)

  return (
    <div className="bg-amber-900 text-amber-100 flex flex-col gap-2 font-serif">
      <h1 className="font-bold font-mono text-4xl capitalize text-center mb-3 flex items-center justify-around">
        {seaCreature.name}
      </h1>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52">Catch phrase</span>
        <span className="card_attributes_content flex justify-center border-2 border-transparent">
          {seaCreature.catch_phrase}
        </span>
      </div>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52 flex items-center">
          Museum Description
        </span>
        <span className="card_attributes_content flex justify-center border-2 border-transparent">
          {seaCreature.description}
        </span>
      </div>
      <div className="card_attributes_line">
        <div className="flex gap-2 flex-1">
          <span className="card_attributes_title w-52 flex items-center">
            Luminosity
          </span>
          <span className="card_attributes_content flex justify-center border-2 border-transparent">
            {seaCreature.lighting_type}
          </span>
        </div>
        <div className="flex gap-2 flex-1">
          <span className="card_attributes_title w-52 flex items-center">
            Shadow Size
          </span>
          <span className="card_attributes_content flex justify-center border-2 border-transparent">
            {seaCreature.shadow}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <CaptureCalendar item={seaCreature} />
        <div className="flex flex-col gap-2 items-center card_attributes_title">
          <span className="card_attributes_title w-max flex items-center border-none">
            Critterpedia Icon
          </span>
          <img src={seaCreature.icon_image} alt="" className="w-36 my-auto" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <figure className="flex items-center gap-2">
          <img
            src={coruja}
            alt=""
            className={`h-10 ${seaCreature.donated ? '' : 'opacity-35'}`}
          />
          <figcaption>Donated?</figcaption>
        </figure>
        <SwitchDonate
          donated={user.donatedSeaCreaturesIds.includes(seaCreature.id)}
          id={seaCreature.id}
          route={'sea_creatures'}
          type='seaCreature'
        />
      </div>
    </div>
  );
}
