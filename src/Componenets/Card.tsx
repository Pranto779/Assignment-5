import { type Dispatch, type SetStateAction } from 'react';
import type { IDataType } from './Type/IType';
import { toast } from 'react-toastify';

export interface CardProps {
  card: IDataType;
  select: IDataType[];
  setSelect: Dispatch<SetStateAction<IDataType[]>>;
  isSelected: boolean;
}

const Card = ({ card, select, setSelect, isSelected }: CardProps) => {
  const HandleButton = () => {
    if (!isSelected) {
      setSelect([...select, card]);
      toast.success(`${card.name} Add To Stock`, {
        position: 'bottom-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setSelect(select.filter((CCard) => CCard.id !== card.id));
      toast.info(`${card.name} Remove To Stock!`, {
        position: 'bottom-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div className="flex justify-between gap-10">
      <div
        className={` rounded-2xl shadow-lg  p-6 bg-white border ${isSelected ? 'border-red-500' : 'border-gray-300'} border-gray-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <img src={card.icon} alt={card.alt} className="w-12 h-12" />
          <span
            className={`font-bold rounded-2xl ${card.badge === 'Popular' ? 'text-sky-400 bg-sky-200' : card.badge == 'Standard' ? 'text-green-600 bg-green-300' : card.badge === 'Fast' ? 'text-orange-400 bg-orange-200' : card.badge === 'Top SQL' ? 'text-blue-500 bg-blue-200' : 'text-red-500 bg-red-200'} text-xs px-3 py-1 rounded`}
          >
            {card.badge}
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-2">{card.name}</h2>

        <p className="text-gray-600 mb-4">{card.description}</p>

        <div className="flex flex-wrap justify-between gap-5 mb-4">
          <span className=" bg-gray-300 text-gray-700 text-xs px-2  rounded-2xl h-7 py-1  ">{card.category}</span>
          <span className="  text-gray-700 text-xs px-2 py-1  ">
            {card.difficulty}
          </span>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 text-sm font-semibold">{card.rating}</span>
          </div>
        </div>

        <button
          onClick={HandleButton}
          className={`w-full ${isSelected ? 'bg-pink-200 text-pink-700' : 'bg-gray-900 text-white'} py-2 rounded` }
          disabled={isSelected}
        >
          {isSelected ? '✔ Added To Stock' : 'Add To Stock'}
        </button>
      </div>
    </div>
  );
};

export default Card;
