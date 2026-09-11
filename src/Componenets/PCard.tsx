import { useState } from 'react';
import Card from './Card';
import type { IDataType } from './Type/IType';
import { RxCross2 } from 'react-icons/rx';

export interface CardProps {
  pcard: IDataType[];
}

const PCard = ({ pcard }: CardProps) => {
  const [select, setSelect] = useState<IDataType[]>([]);

  return (
    <div className="flex justify-between gap-10 ">
      <div className="grid grid-cols-1 px-7 flex-4  md:px-0 mx-auto md:mx-0 md:grid-cols-3 gap-4  mt-5 ">
        {pcard.map((card) => (
          <Card
            card={card}
            key={card.id}
            select={select}
            setSelect={setSelect}
          />
        ))}
      </div>
      <div className=" hidden md:block mt-6 w-[220px] text-center">
        <h2 className="text-2xl font-bold">Your Stack</h2>
        <p className="text-gray-400">{select.length===0?" ":select.length} {select.length===0?"No Card In stack":"Technology Selected"}</p>
        {select.map((selectcard) => (
          <div className="flex flex-col gap-5 " key={selectcard.id}>
            <div className="flex gap-4 items-center mt-5">
              <img
                src={selectcard.icon}
                className="w-[50px] h-[50px]"
                alt={selectcard.alt}
              />
              <div>
                <p className="text-xl font-bold">{selectcard.name}</p>
                <p className="text-gray-400 text-[12px]">
                  {selectcard.category}
                </p>
              </div>
              <RxCross2
                className="text-red-500 cursor-pointer text-2xl"
                onClick={() =>
                  setSelect(select.filter((card) => card.id !== selectcard.id))
                }
              />
            </div>
          </div>
        ))}

        <div className="mx-auto mt-10 px-2">
          <button
            className="btn px-15 border border-orange-500 text-orange-600"
            onClick={() => setSelect([])}
          >
            {' '}
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
