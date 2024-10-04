import { useContext } from 'react';
import type { Fossil } from '../../models/Fossil';
import { SwitchDonate } from '../ui/switch-donate';
import coruja from '/coruja.webp';
import { UserContext } from '../../context/UserContext';

interface FossilProps {
  fossil: Fossil;
}

export function FossilsDetails({ fossil }: FossilProps) {
  const {data: user} = useContext(UserContext)

  return (
    <div className="bg-amber-900 text-amber-100 flex flex-col gap-2 font-serif">
      <h1 className="font-bold font-mono text-4xl capitalize text-center mb-3 flex items-center justify-around">
        {fossil.name}
      </h1>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52">Fossil Group</span>
        <span className="card_attributes_content capitalize">
          {fossil.fossil_group}
        </span>
      </div>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52 flex items-center">
          Museum Description
        </span>
        <span className="card_attributes_content">{fossil.description}</span>
      </div>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52 flex items-center">
          Museum Room
        </span>
        <span className="card_attributes_content border-2 border-transparent">
          {fossil.museum}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <figure className="flex items-center gap-2">
          <img
            src={coruja}
            alt=""
            className={`h-10 ${fossil.donated ? '' : 'opacity-35'}`}
          />
          <figcaption>Donated?</figcaption>
        </figure>
        <SwitchDonate
          donated={user.donatedFossilsIds.includes(fossil.id)}
          id={fossil.id}
          route={'fossils'}
          type='fossil'
        />
      </div>
    </div>
  );
}
