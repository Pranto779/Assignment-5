import { useState } from 'react';
import type { IDataType } from './Type/IType';

export interface CardProps {
  card: IDataType;
}
const Card = ({ card }: CardProps) => {
 const [isSelected,setisSelected]=useState(false)
 const HandleButton=()=>{
setisSelected(!isSelected)

 }

  return (
    <div>
   <div className=" w-sm rounded-lg shadow-lg  p-6 bg-white">
     
      <div className="flex items-center justify-between mb-4">
        <img src={card.icon} alt={card.alt} className="w-12 h-12" />
        <span className=  {`font-bold ${card.hipe==="Popular"?"text-sky-400":card.hipe=="Standard"?"text-green-400":card.hipe==="Fast"?"text-orange-400":card.hipe==="Top SQL"?"text-blue-500":"text-red-500"} text-xs px-3 py-1 rounded`}>
          {card.hipe}
        </span>
      </div>

  
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>

      
      <p className="text-gray-600 mb-4">{card.description}</p>

    
      <div className="flex flex-wrap justify-between gap-5 mb-4">
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
          {card.category}
        </span>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
          {card.level}
        </span>
           <div className="flex items-center mb-4">
        <span className="text-yellow-500">⭐</span>
        <span className="ml-1 text-sm font-semibold">4.9</span>
      </div>
      </div>

   
   

  
      <button onClick={HandleButton} className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
       {isSelected?"Selected":"Add To Card"}
      </button>
    </div>
    
    </div>
  );
};

export default Card;
