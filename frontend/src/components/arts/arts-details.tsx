import type { Art } from '../../models/Art';
import { SwitchDonate } from '../ui/switch-donate';
import coruja from '/coruja.webp';

interface ArtProps {
  art: Art;
}

export function ArtsDetails({ art }: ArtProps) {
  return (
    <div className="bg-amber-900 text-amber-100 flex flex-col gap-2 font-serif">
      <h1 className="font-bold font-mono text-4xl capitalize text-center mb-3 flex items-center justify-around">
        {art.realArtworkTitle}
      </h1>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52">Artist</span>
        <span className="card_attributes_content capitalize">{art.artist}</span>
      </div>
      <div className="card_attributes_line">
        <span className="card_attributes_title w-52 flex items-center">
          Museum Description
        </span>
        <span className="card_attributes_content">{art.description}</span>
      </div>

      <div>{art.sourceNotes}</div>

      <div className="flex justify-between items-center">
        <figure className="flex items-center gap-2">
          <img
            src={coruja}
            alt=""
            className={`h-10 ${art.donated ? '' : 'opacity-35'}`}
          />
          <figcaption>Donated?</figcaption>
        </figure>
        <SwitchDonate donated={art.donated} id={art.id} route={'arts'} />
      </div>
    </div>
  );
}
