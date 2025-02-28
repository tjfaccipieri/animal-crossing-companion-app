import { useState } from 'react';
import type { Villager } from '../models/Villager';
import { speciesList } from '../models/lists/speciesList';
import nooks from '/nooks.png';

export function Villagers() {
  const [data, setData] = useState<Villager[]>([]);
  const [specieActive, setSpecieActive] = useState<string>('');

  async function getVillagersFromSpecies(specie: string) {
    setSpecieActive(specie);
    const response = await fetch(`http://localhost:8080/villagers/${specie}`);
    const resposta = await response.json();
    setData(resposta);
  }

  return (
    <div className="container mx-auto my-4 grid grid-cols-5 gap-8">
      <div className="grid grid-cols-3 gap-1 h-fit sticky top-8">
        {speciesList.map((item) => (
          <button
            type="button"
            key={item}
            className="h-fit card_attributes_title hover:bg-amber-950 hover:text-amber-100"
            onClick={() => getVillagersFromSpecies(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {data.length > 0 ? (
        <div className="col-span-4 h-fit flex flex-col gap-4">
          <p className="text-center text-3xl font-bold capitalize text-amber-950 font-custom">
            {specieActive}s possible villagers list
          </p>
          <div className="grid grid-cols-3 gap-2 ">
            {data?.map((villager) => (
              <div
                key={villager.name}
                className="rounded-lg p-1 border-2"
                style={{
                  backgroundColor: villager.bubbleColor,
                  color: villager.nameColor,
                  borderColor: villager.nameColor,
                }}
              >
                <div className="flex gap-2 w-full font-bold text-lg">
                  <img
                    src={villager.photoImage}
                    alt=""
                    style={{ borderColor: villager.nameColor }}
                    className="rounded-lg w-32 border-[3px]"
                  />
                  
                  <div className="">
                    <p className="">
                      Name:{' '}
                      <span className="font-normal text-base">
                        {villager.name}
                      </span>
                    </p>
                    <p className="">
                      Gender:{' '}
                      <span className="font-normal text-base">
                        {villager.gender}
                      </span>
                    </p>
                    <p className="">
                      Bithday:{' '}
                      <span className="font-normal text-base">
                        {new Intl.DateTimeFormat('en-US', {
                          month: 'short',
                          day: '2-digit',
                        }).format(new Date(villager.birthday))}
                      </span>
                    </p>
                    <p className="">
                      Hobby:{' '}
                      <span className="font-normal text-base">
                        {villager.hobby}
                      </span>
                    </p>
                    <p className="">
                      Personality:{' '}
                      <span className="font-normal text-base">
                        {villager.personality}
                      </span>
                    </p>
                  </div>
                  <img
                    src={villager.iconImage}
                    alt=""
                    style={{
                      borderColor: villager.nameColor,
                      backgroundColor: villager.nameColor,
                    }}
                    className="rounded-lg size-12 ml-auto aspect-square border-[3px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 col-span-4">
          <img src={nooks} alt="" className="animate-[pulse_2s_ease-in-out] " />
          <p className="text-3xl font-bold text-amber-900">
            Please, select some specie to check the list...
          </p>
        </div>
      )}
    </div>
  );
}
