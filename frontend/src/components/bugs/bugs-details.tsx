import type { Bug } from '../../models/Bug';
import { CaptureCalendar } from '../ui/capture-calendar';
import { SwitchDonate } from '../ui/switch-donate';
import bells from '/bells.webp';
import coruja from '/coruja.webp';
import timmyTommy from '/timmy-tommy.png'
import flick from '/flick.png'

interface BugProps {
  bug: Bug;
}

export function BugsDetails({ bug }: BugProps) {
  return (
    <div className="bg-amber-900 text-amber-100 flex flex-col gap-2 font-serif">
      <h1 className="font-bold font-mono text-4xl capitalize text-center mb-3 flex items-center justify-around">
        {bug.name}
      </h1>
      <div className="grid grid-cols-4 gap-2">
        <div id="text-data" className="col-span-3 gap-1 grid">
          <div className="card_attributes_line">
            <span className="card_attributes_title flex items-center w-52">
              Catch Phrase
            </span>
            <span className="card_attributes_content flex justify-center border-2 border-transparent">
              {bug.catchPhrase}
            </span>
          </div>
          <div className="card_attributes_line">
            <span className="card_attributes_title w-52 items-center">
              Museum Description
            </span>
            <span className="card_attributes_content">{bug.description}</span>
          </div>
          <div className="card_attributes_line">
            <span className="card_attributes_title flex items-center w-52">
              Where
            </span>
            <span className="card_attributes_content flex justify-center border-2 border-transparent">
              {bug.whereHow}
            </span>
          </div>
        </div>
        <div id="price-data" className="grid col-span-1 w-full gap-2">
          <div className="card_attributes_line">
            <span className="bg-amber-200 border-2 border-amber-950 px-2 py-1 rounded w-28 flex justify-center items-center">
              <img src={timmyTommy} alt="" className='aspect-square object-contain' />
            </span>
            <p className="card_attributes_content flex gap-2 font-bold justify-center border-2 border-transparent flex-1">
              {bug.sellPrice} <img src={bells} alt="" className="h-6" />
            </p>
          </div>
          <div className="card_attributes_line">
            <span className="bg-amber-200 border-2 border-amber-950 px-2 py-1 rounded w-28 flex justify-center items-center">
              <img src={flick} alt="" className='aspect-square object-contain' />
            </span>
            <p className="card_attributes_content flex gap-2 font-bold justify-center border-2 border-transparent flex-1">
              {bug.flickSellPrice} <img src={bells} alt="" className="h-6" />
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CaptureCalendar item={bug} />
        <div className="flex flex-col gap-2 items-center card_attributes_title">
          <span className="card_attributes_title w-max flex items-center border-none">
            Critterpedia Icon
          </span>
          <img src={bug.iconImage} alt="" className="w-36 my-auto" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <figure className="flex items-center gap-2">
          <img
            src={coruja}
            alt=""
            className={`h-10 ${bug.donated ? '' : 'opacity-35'}`}
          />
          <figcaption>Donated?</figcaption>
        </figure>
        <SwitchDonate donated={bug.donated} id={bug.id} route={'bugs'} />
      </div>
    </div>
  );
}
