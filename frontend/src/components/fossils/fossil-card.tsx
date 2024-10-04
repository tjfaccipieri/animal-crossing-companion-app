import { useContext, useState } from 'react';
import { TbTextPlus } from 'react-icons/tb';
import Modal from 'react-responsive-modal';
import type { Fossil } from '../../models/Fossil';
import { CheckedDonate } from '../ui/checked-donate';
import { FossilsDetails } from './fossils-details';
import bells from '/bells.webp';
import { UserContext } from '../../context/UserContext';

interface FossilItemProps {
  item: Fossil;
}

export function FossilCard({ item }: FossilItemProps) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {data: user} = useContext(UserContext)

  return (
    <div
      key={item.id}
      className="border-2 border-amber-950 bg-amber-900 text-amber-100 rounded-lg p-2 flex flex-col gap-2"
    >
      <div className="flex items-center mr-auto w-full rounded-lg gap-3">
        <div className="relative">
          <img
            src={item.image}
            alt="Bug icon in game"
            className="h-16 w-16 bg-amber-100 rounded-lg p-1"
          />
          {user.donatedFossilsIds.includes(item.id) && <CheckedDonate />}
        </div>
        <h3 className="capitalize font-medium text-lg flex-1">{item.name}</h3>
        <button
          type="button"
          onClick={onOpenModal}
          className="h-12 w-12 bg-amber-100 hover:bg-amber-300 rounded-lg flex items-center justify-center"
        >
          <TbTextPlus className="text-3xl text-amber-950 cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="card_attributes_line">
          <span className="card_attributes_title">Room</span>
          <div className="card_attributes_content">
            <span>Museum {item.museum}</span>
          </div>
        </div>
        <div className="card_attributes_line">
          <span className="card_attributes_title">
            <span className="">Size</span>
          </span>
          <div className="card_attributes_content">
            <span>{item.size}</span>
          </div>
        </div>
        <div className="card_attributes_line">
          <span className="card_attributes_title">
            <img src={bells} alt="" className="h-6" />
          </span>
          <div className="card_attributes_content">
            <span>{item.sell_price} bells</span>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: 'bg-slate-950/80',
          modal: 'bg-amber-900 rounded-lg min-w-[40dvw]',
        }}
        showCloseIcon={false}
      >
        <FossilsDetails fossil={item} />
      </Modal>
    </div>
  );
}
